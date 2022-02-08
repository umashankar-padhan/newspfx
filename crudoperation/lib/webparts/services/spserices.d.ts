import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IDropdownOption } from "office-ui-fabric-react";
export declare class spoperation {
    GetAlllist(context: WebPartContext): Promise<IDropdownOption[]>;
    /**
     * Creat operattion
     */
    creatlistitem(context: WebPartContext, listTitle: string): Promise<String>;
}
//# sourceMappingURL=spserices.d.ts.map