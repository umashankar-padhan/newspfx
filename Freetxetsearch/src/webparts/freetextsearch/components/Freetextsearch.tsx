import * as React from 'react';
import styles from './Freetextsearch.module.scss';
import { IFreetextsearchProps } from './IFreetextsearchProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {} from 'office-ui-fabric-react';
import {} from '@fluentui/react';
import {IFreetextsearchState} from './IFreetextsearchState';

import { Button } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

declare const window: any;

export default class Freetextsearch extends React.Component<IFreetextsearchProps,IFreetextsearchState, {}> {

  /**
   * Search results page uri.
   */
  public ResultsPageUri: string;

  constructor(props: IFreetextsearchProps) {
    super(props);

    this.state = {
      searchQuery: ""
    } as IFreetextsearchState;
  }

  public render(): React.ReactElement<IFreetextsearchProps> {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm10">
            <SearchBox
              className="react-search-box"
              onChange={this._handleInputChange.bind(this)}
              onSearch={this._handleSearch.bind(this)}>
            </SearchBox>
          </div>
          <div className="ms-Grid-col ms-u-sm2">
            <Button id="SearchButton" onClick={this._handleSearch.bind(this)}>
              {this.props.customSearchLabel}
            </Button>
          </div>
        </div>
      </div>
    );
}

/**
   * Search button event handler.
   * @param event 
   */
  private _handleSearch(event: any): void {

    // if a page is specified in the search page results url property 
    // then use it instead of the enterprise search results page.
    if (this.props.searchResultsPageUrl) {

      this.ResultsPageUri = this.props.searchResultsPageUrl;

    } else {

      // defaults to the enterprise search results page.
      if (this.props.SerachConfiguration=="People Search"){
        this.ResultsPageUri = 'https://www.office.com/search/people';

      }
      else if(this.props.SerachConfiguration=="Same Site search"){
      this.ResultsPageUri = `${this.props.tenantUrl}/_layouts/15/search.aspx/siteall`;
      }
      else if(this.props.SerachConfiguration=="Other Site search"){
        this.ResultsPageUri = `${this.props.tenantUrl}/_layouts/15/search.aspx/siteall`;
        }
    }

    // append the query string to the url.
    this.ResultsPageUri += `?q=${this.state.searchQuery}`;
    this._redirect();
  }

  /**
   * Redirects to the results page. 
   * windows.location wrapper so stub can be created in the unit tests.
   */
  private _redirect(): void {

    window.location = this.ResultsPageUri;
  }

  /**
   * Search input handler.
   * @param searchQuery
   */
  private _handleInputChange(searchQuery: string): void {

    this.setState((prevState: IFreetextsearchState, props: IFreetextsearchProps): IFreetextsearchState => {
      prevState.searchQuery = searchQuery;
      return prevState;
    });
  }
}
