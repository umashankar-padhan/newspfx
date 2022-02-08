import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IDemoCrudPnpWebPartProps {
    description: string;
}
export default class DemoCrudPnpWebPart extends BaseClientSideWebPart<IDemoCrudPnpWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=DemoCrudPnpWebPart.d.ts.map