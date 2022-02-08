import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version,DisplayMode } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneDropdown,
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart} from '@microsoft/sp-webpart-base';

import * as strings from 'FreetextsearchWebPartStrings';
import Freetextsearch from './components/Freetextsearch';
import { IFreetextsearchProps } from './components/IFreetextsearchProps';
import {} from '@fluentui/react';

import { IAlertProps } from './components/IAlertProps';
import Alert from './components/Alert';

import Utils from './components/Utils';
import { IBranding } from './components/IBranding';
import { Branding } from './components/Branding';


export interface IFreetextsearchWebPartProps {
  searchResultsPageUrl: string;
  description: string;
  DefaultSearchResultsPageUrlFieldLabel:string;
  EnableCustomSearchPlaceholderLabel:string;
  CustomSearchLabel:string;
  SerachConfiguration:string;
}

export default class FreetextsearchWebPart extends BaseClientSideWebPart<IFreetextsearchWebPartProps> {
  private readonly _branding: IBranding = new Branding();

  public render(): void {
    const element: React.ReactElement<IFreetextsearchProps> = React.createElement(
      Freetextsearch,
      {
        searchResultsPageUrl: this.properties.searchResultsPageUrl,
        SerachConfiguration:this.properties.SerachConfiguration,
        customSearchLabel: this.properties.CustomSearchLabel,
        tenantUrl: Utils.getTenantUrl(this.context.pageContext.site.absoluteUrl, this.context.pageContext.site.serverRelativeUrl)
      }
    );

    ReactDom.render(element, this.domElement);
  }
  protected onInit(): Promise<void> {
    if(!this.properties.CustomSearchLabel){
      this.properties.CustomSearchLabel = strings.CustomSearchLabel;
    }
    
    return new Promise<void>((resolve, reject) => {

      // hides the default search box web part from modern Site Page.
      this._branding.hideDefaultSearchBox();
      return resolve();
    });
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
                PropertyPaneDropdown('SerachConfiguration', {
                  label: "Select your configuration :",
                  options:[
                    {
                      key:"Select your configuration",
                      text:"Select your configuration"
                    },
                    {
                      key:"People Search",
                      text:"People Search"
                    },
                    {
                      key:"Same Site search",
                      text:"Same Site search"
                    },
                    {
                      key:"Other Site search",
                      text:"Other Site search"
                    }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
