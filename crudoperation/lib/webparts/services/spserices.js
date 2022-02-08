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
import { SPHttpClient } from '@microsoft/sp-http';
var spoperation = /** @class */ (function () {
    function spoperation() {
    }
    /* Get all list in Site collection */
    spoperation.prototype.GetAlllist = function (context) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var restApiUrl, listTiles;
            return __generator(this, function (_a) {
                restApiUrl = context.pageContext.web.absoluteUrl + "/_api/web/lists?select=Title";
                listTiles = [];
                context.spHttpClient.get(restApiUrl, SPHttpClient.configurations.v1)
                    .then(function (response) {
                    response.json().then(function (results) {
                        console.log(results);
                        results.value.map(function (result) {
                            listTiles.push({ key: result.Title, text: result.Title });
                        });
                    });
                    resolve(listTiles);
                }, function (error) {
                    reject("error occured" + error);
                });
                return [2 /*return*/];
            });
        }); });
    };
    /**
     * Creat operattion
     */
    spoperation.prototype.creatlistitem = function (context, listTitle) {
        var _this = this;
        var restApiUrl = context.pageContext.web.absoluteUrl + "/api/web/lists/getByTitle('" + listTitle + "')/items";
        var body = JSON.stringify({ Title: "New Test Item created " });
        var options = { headers: {
                Accept: "application/json;odata=nometadata",
                "content-type": "application/json;odata=nometadata",
                "odata-version": "",
            },
            body: body,
        };
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context.spHttpClient.post(restApiUrl, SPHttpClient.configurations.v1, options).
                    then(function (response) {
                    response.json().then(function (result) {
                        resolve("Item with id " + result.ID + "created successfully");
                    }, function (error) {
                        reject("error occurred" + error);
                    });
                });
                return [2 /*return*/];
            });
        }); });
    };
    return spoperation;
}());
export { spoperation };
//# sourceMappingURL=spserices.js.map