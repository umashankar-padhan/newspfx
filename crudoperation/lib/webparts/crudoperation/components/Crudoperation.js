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
import styles from './Crudoperation.module.scss';
import { spoperation } from '../../services/spserices';
import { Button, Dropdown } from 'office-ui-fabric-react';
var Crudoperation = /** @class */ (function (_super) {
    __extends(Crudoperation, _super);
    function Crudoperation(props) {
        var _this = _super.call(this, props) || this;
        _this._spOps = new spoperation();
        _this.state = { listTitle: [], status: "" };
        return _this;
    }
    Crudoperation.prototype.getListTitle = function (event, data) {
        this.selectedListTitle = data.text;
    };
    Crudoperation.prototype.componentDidMount = function () {
        var _this = this;
        this._spOps.GetAlllist(this.props.context).then(function (result) {
            return _this.setState({ listTitle: result });
        });
    };
    Crudoperation.prototype.render = function () {
        var _this = this;
        var option = [];
        return (React.createElement("div", { className: styles.crudoperation },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint spfx !!!"),
                        React.createElement("p", { className: styles.subTitle }, "CRUD Operation Demo using rest api")),
                    React.createElement("div", { id: "dv_parent", className: styles.mystyle },
                        React.createElement(Dropdown, { className: styles.dropdown, options: this.state.listTitle, placeholder: "---Select your list ----", onChange: this.getListTitle }),
                        React.createElement(Button, { className: styles.myButton, text: "Create list item", onClick: function () {
                                return _this._spOps.creatlistitem(_this.props.context, _this.selectedListTitle).then(function (result) {
                                    _this.setState({ status: result });
                                });
                            } }),
                        React.createElement(Button, { className: styles.myButton, text: "Update list item" }),
                        React.createElement(Button, { className: styles.myButton, text: "delete list item" }),
                        React.createElement("div", null, this.state.status))))));
    };
    return Crudoperation;
}(React.Component));
export default Crudoperation;
//# sourceMappingURL=Crudoperation.js.map