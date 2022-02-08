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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './DemoCrudPnp.module.scss';
//import library
import { PrimaryButton, Stack, MessageBar } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp/presets/all";
import { Web } from "@pnp/sp/webs";
var DemoCrudPnp = /** @class */ (function (_super) {
    __extends(DemoCrudPnp, _super);
    // constructor to intialize state and pnp sp object.
    function DemoCrudPnp(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = { showmessageBar: false, message: "", itemID: 0 };
        sp.setup({
            spfxContext: _this.props.spcontext
        });
        return _this;
    }
    DemoCrudPnp.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.demoCrudPnp },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to PnP JS List Items Operations Demo!")))),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(Stack, { horizontal: true, tokens: { childrenGap: 40 } },
                React.createElement(PrimaryButton, { text: "Create New Item", onClick: function () { return _this.createNewItem(); } }),
                React.createElement(PrimaryButton, { text: "Get Item", onClick: function () { return _this.getItem(); } }),
                React.createElement(PrimaryButton, { text: "Update Item", onClick: function () { return _this.updateItem(); } }),
                React.createElement(PrimaryButton, { text: "Delete Item", onClick: function () { return _this.delteItem(); } })),
            React.createElement("br", null),
            React.createElement("br", null),
            this.state.showmessageBar &&
                React.createElement(MessageBar, { onDismiss: function () { return _this.setState({ showmessageBar: false }); }, dismissButtonAriaLabel: "Close" }, this.state.message)));
    };
    // method to use pnp objects and create new item
    DemoCrudPnp.prototype.createNewItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var web, iar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        web = Web("https://cgilearn365.sharepoint.com/sites/testsite4/");
                        return [4 /*yield*/, web.lists.getByTitle("DemoList").items.add({
                                Title: "Title " + new Date(),
                                Description: "This is item created using PnP JS"
                            })];
                    case 1:
                        iar = _a.sent();
                        iar.item.attachmentFiles.add("TestFile.txt", "This is test file");
                        console.log(iar);
                        this.setState({ showmessageBar: true, message: "Item Added Sucessfully", itemID: iar.data.Id });
                        return [2 /*return*/];
                }
            });
        });
    };
    // method to use pnp objects and get item by id, using item ID set from createNewItem method.
    DemoCrudPnp.prototype.getItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sp.web.lists.getByTitle("DemoList").items.getById(this.state.itemID).get()];
                    case 1:
                        item = _a.sent();
                        console.log(item);
                        this.setState({ showmessageBar: true, message: "Last Item Created Title:--> " + item.Title });
                        return [2 /*return*/];
                }
            });
        });
    };
    // method to use pnp object udpate item by id, using item id set from createNewItem method.
    DemoCrudPnp.prototype.updateItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = sp.web.lists.getByTitle("DemoList");
                        return [4 /*yield*/, list.items.getById(this.state.itemID).update({
                                Title: "My Updated Title",
                                Description: "Here is a updated description"
                            })];
                    case 1:
                        i = _a.sent();
                        console.log(i);
                        this.setState({ showmessageBar: true, message: "Item updated sucessfully" });
                        return [2 /*return*/];
                }
            });
        });
    };
    // method to use pnp object udpate item by id, using item id set from createNewItem method.
    DemoCrudPnp.prototype.delteItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = sp.web.lists.getByTitle("DemoList");
                        return [4 /*yield*/, list.items.getById(this.state.itemID).delete()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.setState({ showmessageBar: true, message: "Item deleted sucessfully" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return DemoCrudPnp;
}(React.Component));
export default DemoCrudPnp;
//# sourceMappingURL=DemoCrudPnp.js.map