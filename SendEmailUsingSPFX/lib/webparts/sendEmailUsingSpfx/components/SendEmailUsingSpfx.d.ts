import * as React from 'react';
import { ISendEmailUsingSpfxProps } from './ISendEmailUsingSpfxProps';
export interface ISendEmailUsingSpfxState {
    email: string;
    subject: string;
    message: string;
    files: any[];
    blobs: any[];
}
export default class SendEmailUsingSpfx extends React.Component<ISendEmailUsingSpfxProps, ISendEmailUsingSpfxState> {
    private reader;
    constructor(props: ISendEmailUsingSpfxProps);
    render(): React.ReactElement<ISendEmailUsingSpfxProps>;
    private emailHandler;
    private subjectHandler;
    private messageHandler;
    private showUploadedfiles;
    private formatBytes;
    private uploadHandler;
    private attachFile;
    private sendMail;
}
//# sourceMappingURL=SendEmailUsingSpfx.d.ts.map