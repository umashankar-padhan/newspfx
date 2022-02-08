import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISpfxPnpListitemattachmentsWebPartProps {
    description: string;
}
export default class SpfxPnpListitemattachmentsWebPart extends BaseClientSideWebPart<ISpfxPnpListitemattachmentsWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpfxPnpListitemattachmentsWebPart.d.ts.map