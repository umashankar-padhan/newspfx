var Branding = /** @class */ (function () {
    function Branding() {
        this._searchPlaceHolderId = "custom-react-react-search-box";
        this._searchPlaceHolderClass = "custom-react-react-search-box";
        this._searchPlaceHolderStyle = "padding-top:10px;";
    }
    Branding.prototype.hideDefaultSearchBox = function () {
        var _this = this;
        var attempts = 0;
        var timeout = 40;
        var count = 0;
        var hideDefaultSearchBox = function () {
            _this._hideSearchBar();
            _this._fixNavigation();
            count += _this._hideSearchBoxes();
            // should hide 2 search boxes
            if (count < 2 && attempts < timeout) {
                // re-schedule the hide action.
                attempts += 1;
                window.setTimeout(hideDefaultSearchBox, 50);
            }
        };
        hideDefaultSearchBox();
    };
    Branding.prototype.getSearchPlaceHolder = function () {
        var placeholder = window.document.getElementById(this._searchPlaceHolderId);
        if (placeholder) {
            return placeholder;
        }
        else {
            return this._createSearchPlaceHolder();
        }
    };
    Branding.prototype.removeSearchPlaceholder = function () {
        var element = window.document.getElementById(this._searchPlaceHolderId);
        if (element) {
            element.parentElement.removeChild(element);
        }
    };
    /**
     * Creates new div html element below the ms-banner (custom actions) section.
     * The react search box web part will be positioned within the placeholder.
     */
    Branding.prototype._createSearchPlaceHolder = function () {
        var headers = window.document.getElementsByClassName("ms-banner");
        if (headers.length === 0) {
            console.log("ms-banner class not found. Cannot append the search webpart below the custom actions section.");
            return null;
        }
        var firstHeader = headers[0];
        var searchPlaceHolder = window.document.createElement("div");
        searchPlaceHolder.setAttribute("id", this._searchPlaceHolderId);
        searchPlaceHolder.setAttribute("class", this._searchPlaceHolderClass);
        searchPlaceHolder.setAttribute("style", this._searchPlaceHolderStyle);
        firstHeader.appendChild(searchPlaceHolder);
        return searchPlaceHolder;
    };
    /**
     * Hides default search boxes and provides the parent function with count.
     */
    Branding.prototype._hideSearchBoxes = function () {
        var items = window.document.getElementsByTagName("form");
        var count = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].getAttribute("role").indexOf("search") !== -1) {
                // items[i].style.display = "none";
                items[i].parentElement.removeChild(items[i]);
                count += 1;
                if (count >= 2) {
                    break;
                }
            }
        }
        return count;
    };
    /**
     * Aligns the navigation since the search box is removed.
     */
    Branding.prototype._fixNavigation = function () {
        var items = window.document.getElementsByTagName("nav");
        if (items.length) {
            items[0].style.top = "0px";
        }
    };
    /**
     * Hides the search bar since the search box is removed.
     */
    Branding.prototype._hideSearchBar = function () {
        var items = window.document.getElementsByTagName("div");
        for (var i = 0; i < items.length; i++) {
            if (items[i].className.indexOf("searchBar_") !== -1) {
                items[i].style.display = "none";
                // items[i].parentElement.removeChild(items[i]);
                break;
            }
        }
    };
    return Branding;
}());
export { Branding };
//# sourceMappingURL=Branding.js.map