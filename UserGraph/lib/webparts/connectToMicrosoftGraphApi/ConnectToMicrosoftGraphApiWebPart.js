var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './ConnectToMicrosoftGraphApiWebPart.module.scss';
import * as strings from 'ConnectToMicrosoftGraphApiWebPartStrings';
var ConnectToMicrosoftGraphApiWebPart = /** @class */ (function (_super) {
    __extends(ConnectToMicrosoftGraphApiWebPart, _super);
    function ConnectToMicrosoftGraphApiWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectToMicrosoftGraphApiWebPart.prototype.render = function () {
        var _this = this;
        this.context.msGraphClientFactory
            .getClient()
            .then(function (client) {
            // get information about the current user from the Microsoft Graph
            client
                .api('/me')
                .get(function (error, response, rawResponse) {
                // handle the response
                console.log(JSON.stringify(response));
                _this.domElement.innerHTML = "\n      <div class=\"" + styles.connectToMicrosoftGraphApi + "\">\n        <div class=\"" + styles.container + "\">\n          <div class=\"" + styles.row + "\">\n            <div class=\"" + styles.column + "\">\n              <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + styles.description + "\">" + escape(_this.properties.description) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n                <span class=\"" + styles.label + "\">Learn more</span>\n              </a>\n            </div>\n            <p class=\"" + styles.description + "\">DisplayName:" + response.displayName + "</p>\n            <p class=\"" + styles.description + "\">Email:" + response.mail + "</p>\n            <p class=\"" + styles.description + "\">Phone Number:" + response.businessPhones[0] + "</p>\n            </div>\n          </div>\n        </div>\n      </div>";
            });
        });
    };
    Object.defineProperty(ConnectToMicrosoftGraphApiWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ConnectToMicrosoftGraphApiWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return ConnectToMicrosoftGraphApiWebPart;
}(BaseClientSideWebPart));
export default ConnectToMicrosoftGraphApiWebPart;
//# sourceMappingURL=ConnectToMicrosoftGraphApiWebPart.js.map