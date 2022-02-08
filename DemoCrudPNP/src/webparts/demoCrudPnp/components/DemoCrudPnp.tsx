import * as React from 'react';
import styles from './DemoCrudPnp.module.scss';
import { IDemoCrudPnpProps } from './IDemoCrudPnpProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import library
import {  PrimaryButton, Stack,MessageBar, MessageBarType } from 'office-ui-fabric-react';
import { sp, IItemAddResult, DateTimeFieldFormatType } from "@pnp/sp/presets/all";
import { Web } from "@pnp/sp/webs";


//create state
export interface IDemoCrudPnpState {
  showmessageBar:boolean; //to show/hide message bar on success
  message:string; // what message to be displayed in message bar
  itemID:number; // current item ID after create new item is clicked
 }

export default class DemoCrudPnp extends React.Component<IDemoCrudPnpProps, IDemoCrudPnpState> {
  
   // constructor to intialize state and pnp sp object.
   constructor(props: IDemoCrudPnpProps,state:IDemoCrudPnpState) {
    super(props);
    this.state = {showmessageBar:false,message:"",itemID:0};
    sp.setup({
      spfxContext: this.props.spcontext
    });
  }
  
  
  public render(): React.ReactElement<IDemoCrudPnpProps> {
    return (
      <div className={ styles.demoCrudPnp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to PnP JS List Items Operations Demo!</span>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <Stack horizontal tokens={{childrenGap:40}}>
                <PrimaryButton text="Create New Item" onClick={()=>this.createNewItem()}  />
                <PrimaryButton text="Get Item" onClick={()=>this.getItem()} />
                <PrimaryButton text="Update Item" onClick={()=>this.updateItem()} />
                <PrimaryButton text="Delete Item" onClick={()=>this.delteItem()} />
             </Stack>
             <br></br>
            <br></br>
             {this.state.showmessageBar &&
             <MessageBar   onDismiss={()=>this.setState({showmessageBar:false})}
                dismissButtonAriaLabel="Close">
                  {this.state.message}
            </MessageBar>
            }
      </div>
    );
  }

  // method to use pnp objects and create new item
  private async createNewItem(){debugger;
    const web = Web("https://cgilearn365.sharepoint.com/sites/testsite4/"); 
    const iar: IItemAddResult = await web.lists.getByTitle("DemoList").items.add({
      Title: "Title " + new Date(),
      Description: "This is item created using PnP JS"      
    });
    iar.item.attachmentFiles.add("TestFile.txt", "This is test file")
    console.log(iar);
    this.setState({showmessageBar:true,message:"Item Added Sucessfully",itemID:iar.data.Id});
  }

  // method to use pnp objects and get item by id, using item ID set from createNewItem method.
  private async getItem(){
    // get a specific item by id
    const item: any = await sp.web.lists.getByTitle("DemoList").items.getById(this.state.itemID).get();
    console.log(item);
    this.setState({showmessageBar:true,message:"Last Item Created Title:--> " + item.Title});
  }

  // method to use pnp object udpate item by id, using item id set from createNewItem method.
  private async updateItem(){

    let list = sp.web.lists.getByTitle("DemoList");
    const i = await list.items.getById(this.state.itemID).update({
      Title: "My Updated Title",
      Description: "Here is a updated description"
    });
    console.log(i);
    this.setState({showmessageBar:true,message:"Item updated sucessfully"});
  }

  // method to use pnp object udpate item by id, using item id set from createNewItem method.
  private async delteItem(){
    let list = sp.web.lists.getByTitle("DemoList");
    var res = await list.items.getById(this.state.itemID).delete();
    console.log(res);
    this.setState({showmessageBar:true,message:"Item deleted sucessfully"});
  }
}