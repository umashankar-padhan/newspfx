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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import styles from './SpfxPnpListitemattachments.module.scss';
import { ListPicker, ListItemPicker } from "@pnp/spfx-controls-react/lib";
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { SpfxAttachmentControl } from '../../spfxPnpListitemattachments/components/SpfxAttachmentControl';
var SpfxPnpListitemattachments = /** @class */ (function (_super) {
    __extends(SpfxPnpListitemattachments, _super);
    function SpfxPnpListitemattachments(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = { SeletedList: "", SelectedItem: null };
        return _this;
    }
    SpfxPnpListitemattachments.prototype.render = function () {
        var attaprops = [];
        attaprops = ({ SeletedList: this.state.SeletedList, SelectedItem: this.state.SelectedItem, context: this.props.context });
        return (React.createElement("div", { className: styles.spfxPnpListitemattachments },
            React.createElement(ListPicker, { context: this.props.context, label: "Select your list", placeHolder: "Select your list", baseTemplate: 100, includeHidden: false, multiSelect: false, onSelectionChanged: this.onListPickerChange }),
            React.createElement("br", null),
            React.createElement("label", null, "Search List Item"),
            React.createElement(ListItemPicker, { listId: this.state.SeletedList, columnInternalName: 'Title', keyColumnInternalName: 'Id', itemLimit: 1, onSelectedItem: this.onSelectedItem, context: this.props.context }),
            React.createElement("br", null),
            React.createElement(SpfxAttachmentControl, __assign({}, attaprops))));
    };
    SpfxPnpListitemattachments.prototype.onListPickerChange = function (selectedlist) {
        this.setState({
            SeletedList: selectedlist
        });
    };
    SpfxPnpListitemattachments.prototype.onSelectedItem = function (data) {
        if (data.length == 0) {
            this.setState({ SelectedItem: null });
        }
        else
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                this.setState({ SelectedItem: +item.key });
            }
    };
    __decorate([
        autobind
    ], SpfxPnpListitemattachments.prototype, "onListPickerChange", null);
    __decorate([
        autobind
    ], SpfxPnpListitemattachments.prototype, "onSelectedItem", null);
    return SpfxPnpListitemattachments;
}(React.Component));
export default SpfxPnpListitemattachments;
//# sourceMappingURL=SpfxPnpListitemattachments.js.map