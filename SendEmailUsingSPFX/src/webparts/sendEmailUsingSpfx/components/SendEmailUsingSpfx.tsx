import * as React from 'react';
import styles from './SendEmailUsingSpfx.module.scss';
import { ISendEmailUsingSpfxProps } from './ISendEmailUsingSpfxProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { MSGraphClient } from '@microsoft/sp-http';


export interface ISendEmailUsingSpfxState{
  email:string;
  subject: string;
  message: string;
  files: any[];
  blobs: any[];
}

export default class SendEmailUsingSpfx extends React.Component<ISendEmailUsingSpfxProps, ISendEmailUsingSpfxState> {
  private reader:FileReader;

  constructor(props:ISendEmailUsingSpfxProps){
    super(props);
    this.reader = new FileReader();
    this.state={
      email:"",
      subject:"",
      message:"",
      files:null,
      blobs:[],
    };
    this.showUploadedfiles = this.showUploadedfiles.bind(this);
  }
    
  public render(): React.ReactElement<ISendEmailUsingSpfxProps> {
    console.log(this.state);

    return (
      <div className={ styles.sendEmailUsingSpfx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
          <span className={ styles.title }>Send Email using Graph API In SharePoint</span>
          <br/>
          <br/>
          <br/>
          <input className={styles.subject} type="text" onChange={this.emailHandler.bind(this)} placeholder="To:" value={this.state.email} title="Please enter email address"/>
            <br/>
            <br/>
            <input className={styles.subject} type="text" onChange={this.subjectHandler.bind(this)} placeholder="Subject" value={this.state.subject} title="Subject"/>
            <br/>
            <br/>
            <textarea className={styles.message} rows={6} onChange={this.messageHandler.bind(this)}  placeholder={"Message"} value={this.state.message} title="Message"/>            
            <br/>
            <br/>
            <div className={styles.inputFileWraper}>
              <input 
                className={styles.inputFile}
                type="file" 
                name="filename"
                multiple = {true} 
                onChange={(file)=>{this.uploadHandler(file);}}
                title={"Drag & drop files here"} 
              />
            </div>
            <div>{this.showUploadedfiles()}</div>
            <br/>
            <button 
              className={styles.button}
              onClick={()=>{this.sendMail();}}
              >
              Send
            </button>          
          </div>
        </div>
      </div>
    );
  }
  private emailHandler(e){
    this.setState({email:e.target.value});
  }
  private subjectHandler(e){
    this.setState({subject:e.target.value});
  }
  private messageHandler(e){
    this.setState({message:e.target.value});
  }
  private showUploadedfiles=()=>{
    let files = [];
    if(this.state.files != null){
      for(let i = 0; i < this.state.files.length; i++){
      files.push(
        <div key={i} className={styles.uploadedFile}>
          <span className={styles.uploadedFile1}>{this.state.files[i].name}</span>
          <span className={styles.uploadedFile2} >{this.formatBytes(this.state.files[i].size)}</span>
        </div>);
      }
    }
    return files;
  }
  private formatBytes(bytes,decimals=2) {
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
        dm = decimals <= 0 ? 0 : decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }
 private uploadHandler(e:any){
  this.setState({files:e.target.files});
  let files =e.target.files;
  for (let i = 0; i < files.length; i++) {
    this.attachFile(files[i]);
  }
}
private attachFile(file:any):Promise<any>{
  this.setState({blobs:[]});
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { 
      resolve(reader.result);
      let blobs = this.state.blobs.slice();
      let bytes = reader.result.toString().substring(reader.result.toString().indexOf(",") + 1);
      blobs.push(bytes);
      this.setState({ blobs });
    };
  });
}
private sendMail(){
  const mail = {
    message : {
      subject: this.state.subject,
      body: {
        contentType: "Text",
        content: this.state.message
      },
      toRecipients: [
        {
          emailAddress: {
            address: this.state.email
          }
        }
      ],
      attachments: []
    }
  };
if(this.state.files != null ){
  for (let i = 0; i < this.state.files.length; i++) {
    mail.message.attachments.push(
      {
        "@odata.type": "#microsoft.graph.fileAttachment",
        "name": this.state.files[i].name,
        "contentBytes": this.state.blobs[i],
        "contentType": this.state.files[i].type
      }
    );
  }
}
this.props.graph.getClient().then((client: MSGraphClient) => {
  client.api('me/sendMail')
  .post(mail)
  .then((response) => {
    this.setState({
        email:"",
        subject:"",
        message:"",
        files:null,
        blobs:[],
    });
  }).catch((ex)=>{
    console.log(ex);
    alert("Something went wrong! Please try again later.");
  });
});
}
}


