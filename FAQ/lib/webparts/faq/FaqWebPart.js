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
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'FaqWebPartStrings';
import Faq from './components/Faq';
import { listService } from '../_helpers/listservice';
import { PropertyFieldMultiSelect } from '@pnp/spfx-property-controls/lib/PropertyFieldMultiSelect';
var FaqWebPart = /** @class */ (function (_super) {
    __extends(FaqWebPart, _super);
    function FaqWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.categories = [];
        return _this;
    }
    FaqWebPart.prototype.onInit = function () {
        this._listService = new listService(this.context.pageContext.web.absoluteUrl, this.context.spHttpClient);
        this._getListItems();
        return Promise.resolve();
    };
    FaqWebPart.prototype._getListItems = function () {
        var _this = this;
        var initialCategories = [];
        var distinctCategories = [];
        this._listService.getListItems()
            .then(function (items) {
            items.forEach(function (category) {
                initialCategories.push(category.Category);
            });
            distinctCategories = initialCategories.filter(function (value, index) { return initialCategories.indexOf(value) === index; });
            distinctCategories.forEach(function (item) {
                _this.categories.push({
                    key: item,
                    text: item
                });
            });
            console.log(_this.categories);
            _this.context.propertyPane.refresh();
        });
    };
    FaqWebPart.prototype.render = function () {
        var element = React.createElement(Faq, {
            description: this.properties.description,
            context: this.context,
            absoluteUrl: this.context.pageContext.web.absoluteUrl,
            multiSelect: this.properties.multiSelect
        });
        ReactDom.render(element, this.domElement);
    };
    FaqWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FaqWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FaqWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return FaqWebPart;
}(BaseClientSideWebPart));
export default FaqWebPart;
//# sourceMappingURL=FaqWebPart.js.map