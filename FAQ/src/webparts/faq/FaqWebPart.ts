import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,IPropertyPaneDropdownOption
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FaqWebPartStrings';
import Faq from './components/Faq';
import { IFaqProps } from './components/IFaqProps';
import {IFAQList} from '../_helpers/listmodel';
import {listService} from '../_helpers/listservice';

import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';

export interface IFaqWebPartProps {
  description: string;
  multiSelect: string[];
}

export default class FaqWebPart extends BaseClientSideWebPart<IFaqWebPartProps> {

  private _listService: listService;
  private categories: IPropertyPaneDropdownOption[] = [];
  protected onInit(): Promise<void> {
    this._listService = new listService(this.context.pageContext.web.absoluteUrl, this.context.spHttpClient);
    this._getListItems();
    return Promise.resolve();
  }
  private _getListItems(): void {
    let initialCategories = [];
    let distinctCategories = [];
    this._listService.getListItems()
      .then((items: IFAQList[]) => {
        items.forEach(category => {
          initialCategories.push(category.Category);
        });
        distinctCategories = initialCategories.filter((value, index) => initialCategories.indexOf(value) === index);
        distinctCategories.forEach(item => {
          this.categories.push({
            key: item,
            text: item
          });
        });
        console.log(this.categories);
        this.context.propertyPane.refresh();
      });
  }



  public render(): void {
    const element: React.ReactElement<IFaqProps> = React.createElement(
      Faq,
      {
        description: this.properties.description,
        context: this.context,
        absoluteUrl: this.context.pageContext.web.absoluteUrl,
        multiSelect: this.properties.multiSelect
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldMultiSelect('multiSelect', {
                  key: 'multiSelect',
                  label: "Select Categories",
                  options: this.categories,
                  selectedKeys: this.properties.multiSelect
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
