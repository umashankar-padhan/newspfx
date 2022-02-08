import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IConnectToMicrosoftGraphApiWebPartProps {
    description: string;
}
export default class ConnectToMicrosoftGraphApiWebPart extends BaseClientSideWebPart<IConnectToMicrosoftGraphApiWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ConnectToMicrosoftGraphApiWebPart.d.ts.map