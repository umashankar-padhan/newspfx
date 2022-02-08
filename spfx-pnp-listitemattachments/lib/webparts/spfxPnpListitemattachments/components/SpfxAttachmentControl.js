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
import { ListItemAttachments } from "@pnp/spfx-controls-react/lib";
import styles from './SpfxPnpListitemattachments.module.scss';
var SpfxAttachmentControl = /** @class */ (function (_super) {
    __extends(SpfxAttachmentControl, _super);
    function SpfxAttachmentControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxAttachmentControl.prototype.render = function () {
        return (React.createElement("div", { className: styles.spfxPnpListitemattachments }, (this.props.SelectedItem == null) ? '' :
            React.createElement("div", null,
                React.createElement("label", null, "Attachments"),
                React.createElement(ListItemAttachments, { listId: this.props.SeletedList, itemId: this.props.SelectedItem, context: this.props.context, disabled: false }))));
    };
    return SpfxAttachmentControl;
}(React.Component));
export { SpfxAttachmentControl };
//# sourceMappingURL=SpfxAttachmentControl.js.map