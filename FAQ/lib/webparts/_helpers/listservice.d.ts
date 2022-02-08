import { SPHttpClient } from '@microsoft/sp-http';
import { IFAQList } from './listmodel';
export declare class listService {
    private siteAbsoluteUrl;
    private client;
    constructor(siteAbsoluteUrl: string, client: SPHttpClient);
    getListItems(): Promise<IFAQList[]>;
}
//# sourceMappingURL=listservice.d.ts.map