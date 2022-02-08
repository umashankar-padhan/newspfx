import * as React from 'react';
import { IDemoCrudPnpProps } from './IDemoCrudPnpProps';
export interface IDemoCrudPnpState {
    showmessageBar: boolean;
    message: string;
    itemID: number;
}
export default class DemoCrudPnp extends React.Component<IDemoCrudPnpProps, IDemoCrudPnpState> {
    constructor(props: IDemoCrudPnpProps, state: IDemoCrudPnpState);
    render(): React.ReactElement<IDemoCrudPnpProps>;
    private createNewItem;
    private getItem;
    private updateItem;
    private delteItem;
}
//# sourceMappingURL=DemoCrudPnp.d.ts.map