import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './ConnectToMicrosoftGraphApiWebPart.module.scss';
import * as strings from 'ConnectToMicrosoftGraphApiWebPartStrings';
import { MSGraphClient } from '@microsoft/sp-http';

export interface IConnectToMicrosoftGraphApiWebPartProps {
  description: string;
}

export default class ConnectToMicrosoftGraphApiWebPart extends BaseClientSideWebPart<IConnectToMicrosoftGraphApiWebPartProps> {

  public render(): void {
    this.context.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {
        // get information about the current user from the Microsoft Graph
        client
          .api('/me')
          .get((error, response: any, rawResponse?: any) => {
            // handle the response
            console.log(JSON.stringify(response));
         

    this.domElement.innerHTML = `
      <div class="${ styles.connectToMicrosoftGraphApi }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
            <p class="${ styles.description }">DisplayName:${response.DisplayName}</p>
            <p class="${ styles.description }">Email:${response.mail}</p>
            
            </div>
          </div>
        </div>
      </div>`;
    });
  });
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
