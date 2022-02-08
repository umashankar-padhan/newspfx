import {MSGraphClientFactory} from '@microsoft/sp-http';

export interface ISendEmailUsingSpfxProps {
  userEmail:string;
  graph:MSGraphClientFactory;
}
