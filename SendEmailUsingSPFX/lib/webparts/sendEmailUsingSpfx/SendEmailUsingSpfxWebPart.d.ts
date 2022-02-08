import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ISendEmailUsingSpfxWebPartProps {
    description: string;
}
export default class SendEmailUsingSpfxWebPart extends BaseClientSideWebPart<ISendEmailUsingSpfxWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SendEmailUsingSpfxWebPart.d.ts.map