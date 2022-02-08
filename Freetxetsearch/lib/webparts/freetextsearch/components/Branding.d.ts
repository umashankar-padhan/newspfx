import { IBranding } from './IBranding';
export declare class Branding implements IBranding {
    private readonly _searchPlaceHolderId;
    private readonly _searchPlaceHolderClass;
    private readonly _searchPlaceHolderStyle;
    hideDefaultSearchBox(): void;
    getSearchPlaceHolder(): HTMLElement;
    removeSearchPlaceholder(): void;
    /**
     * Creates new div html element below the ms-banner (custom actions) section.
     * The react search box web part will be positioned within the placeholder.
     */
    private _createSearchPlaceHolder;
    /**
     * Hides default search boxes and provides the parent function with count.
     */
    private _hideSearchBoxes;
    /**
     * Aligns the navigation since the search box is removed.
     */
    private _fixNavigation;
    /**
     * Hides the search bar since the search box is removed.
     */
    private _hideSearchBar;
}
//# sourceMappingURL=Branding.d.ts.map