var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getTenantUrl = function (absoluteUrl, serverRelativeUrl) {
        var tenantUrl = absoluteUrl;
        if (serverRelativeUrl !== "/") {
            tenantUrl = tenantUrl.replace(serverRelativeUrl, "");
        }
        return tenantUrl;
    };
    return Utils;
}());
export default Utils;
//# sourceMappingURL=Utils.js.map