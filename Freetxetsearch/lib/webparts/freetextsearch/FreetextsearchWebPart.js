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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneDropdown, } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'FreetextsearchWebPartStrings';
import Freetextsearch from './components/Freetextsearch';
import Utils from './components/Utils';
import { Branding } from './components/Branding';
var FreetextsearchWebPart = /** @class */ (function (_super) {
    __extends(FreetextsearchWebPart, _super);
    function FreetextsearchWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._branding = new Branding();
        return _this;
    }
    FreetextsearchWebPart.prototype.render = function () {
        var element = React.createElement(Freetextsearch, {
            searchResultsPageUrl: this.properties.searchResultsPageUrl,
            SerachConfiguration: this.properties.SerachConfiguration,
            customSearchLabel: this.properties.CustomSearchLabel,
            tenantUrl: Utils.getTenantUrl(this.context.pageContext.site.absoluteUrl, this.context.pageContext.site.serverRelativeUrl)
        });
        ReactDom.render(element, this.domElement);
    };
    FreetextsearchWebPart.prototype.onInit = function () {
        var _this = this;
        if (!this.properties.CustomSearchLabel) {
            this.properties.CustomSearchLabel = strings.CustomSearchLabel;
        }
        return new Promise(function (resolve, reject) {
            // hides the default search box web part from modern Site Page.
            _this._branding.hideDefaultSearchBox();
            return resolve();
        });
    };
    FreetextsearchWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FreetextsearchWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FreetextsearchWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                    options: [
                                        {
                                            key: "Select your configuration",
                                            text: "Select your configuration"
                                        },
                                        {
                                            key: "People Search",
                                            text: "People Search"
                                        },
                                        {
                                            key: "Same Site search",
                                            text: "Same Site search"
                                        },
                                        {
                                            key: "Other Site search",
                                            text: "Other Site search"
                                        }
                                    ]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FreetextsearchWebPart;
}(BaseClientSideWebPart));
export default FreetextsearchWebPart;
//# sourceMappingURL=FreetextsearchWebPart.js.map