import * as React from 'react';
import { IFreetextsearchProps } from './IFreetextsearchProps';
import { IFreetextsearchState } from './IFreetextsearchState';
export default class Freetextsearch extends React.Component<IFreetextsearchProps, IFreetextsearchState, {}> {
    /**
     * Search results page uri.
     */
    ResultsPageUri: string;
    constructor(props: IFreetextsearchProps);
    render(): React.ReactElement<IFreetextsearchProps>;
    /**
       * Search button event handler.
       * @param event
       */
    private _handleSearch;
    /**
     * Redirects to the results page.
     * windows.location wrapper so stub can be created in the unit tests.
     */
    private _redirect;
    /**
     * Search input handler.
     * @param searchQuery
     */
    private _handleInputChange;
}
//# sourceMappingURL=Freetextsearch.d.ts.map