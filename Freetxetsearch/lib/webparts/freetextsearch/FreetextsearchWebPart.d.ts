import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFreetextsearchWebPartProps {
    searchResultsPageUrl: string;
    description: string;
    DefaultSearchResultsPageUrlFieldLabel: string;
    EnableCustomSearchPlaceholderLabel: string;
    CustomSearchLabel: string;
    SerachConfiguration: string;
}
export default class FreetextsearchWebPart extends BaseClientSideWebPart<IFreetextsearchWebPartProps> {
    private readonly _branding;
    render(): void;
    protected onInit(): Promise<void>;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FreetextsearchWebPart.d.ts.map