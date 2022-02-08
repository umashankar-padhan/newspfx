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
import { Button } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
var Freetextsearch = /** @class */ (function (_super) {
    __extends(Freetextsearch, _super);
    function Freetextsearch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            searchQuery: ""
        };
        return _this;
    }
    Freetextsearch.prototype.render = function () {
        return (React.createElement("div", { className: "ms-Grid" },
            React.createElement("div", { className: "ms-Grid-row" },
                React.createElement("div", { className: "ms-Grid-col ms-u-sm10" },
                    React.createElement(SearchBox, { className: "react-search-box", onChange: this._handleInputChange.bind(this), onSearch: this._handleSearch.bind(this) })),
                React.createElement("div", { className: "ms-Grid-col ms-u-sm2" },
                    React.createElement(Button, { id: "SearchButton", onClick: this._handleSearch.bind(this) }, this.props.customSearchLabel)))));
    };
    /**
       * Search button event handler.
       * @param event
       */
    Freetextsearch.prototype._handleSearch = function (event) {
        // if a page is specified in the search page results url property 
        // then use it instead of the enterprise search results page.
        if (this.props.searchResultsPageUrl) {
            this.ResultsPageUri = this.props.searchResultsPageUrl;
        }
        else {
            // defaults to the enterprise search results page.
            if (this.props.SerachConfiguration == "People Search") {
                this.ResultsPageUri = 'https://www.office.com/search/people';
            }
            else if (this.props.SerachConfiguration == "Same Site search") {
                this.ResultsPageUri = this.props.tenantUrl + "/_layouts/15/search.aspx/siteall";
            }
            else if (this.props.SerachConfiguration == "Other Site search") {
                this.ResultsPageUri = this.props.tenantUrl + "/_layouts/15/search.aspx/siteall";
            }
        }
        // append the query string to the url.
        this.ResultsPageUri += "?q=" + this.state.searchQuery;
        this._redirect();
    };
    /**
     * Redirects to the results page.
     * windows.location wrapper so stub can be created in the unit tests.
     */
    Freetextsearch.prototype._redirect = function () {
        window.location = this.ResultsPageUri;
    };
    /**
     * Search input handler.
     * @param searchQuery
     */
    Freetextsearch.prototype._handleInputChange = function (searchQuery) {
        this.setState(function (prevState, props) {
            prevState.searchQuery = searchQuery;
            return prevState;
        });
    };
    return Freetextsearch;
}(React.Component));
export default Freetextsearch;
//# sourceMappingURL=Freetextsearch.js.map