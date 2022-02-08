import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IFaqWebPartProps {
    description: string;
    multiSelect: string[];
}
export default class FaqWebPart extends BaseClientSideWebPart<IFaqWebPartProps> {
    private _listService;
    private categories;
    protected onInit(): Promise<void>;
    private _getListItems;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=FaqWebPart.d.ts.map