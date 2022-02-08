import { SPHttpClient } from '@microsoft/sp-http';
var LIST_API_ENDPOINT = "/_api/web/lists/getbytitle('FAQ')";
var SELECT_QUERY = '$select=Id,Title,Answer,Category,Featured';
var listService = /** @class */ (function () {
    function listService(siteAbsoluteUrl, client) {
        this.siteAbsoluteUrl = siteAbsoluteUrl;
        this.client = client;
    }
    listService.prototype.getListItems = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.get("" + _this.siteAbsoluteUrl + LIST_API_ENDPOINT + "/items?" + SELECT_QUERY, SPHttpClient.configurations.v1) // get response & parse body as JSON
                .then(function (response) {
                return response.json();
            }) // get parsed response as array, and return
                .then(function (response) {
                resolve(response.value);
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    return listService;
}());
export { listService };
//# sourceMappingURL=listservice.js.map