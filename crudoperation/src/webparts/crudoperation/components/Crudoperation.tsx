import * as React from 'react';
import styles from './Crudoperation.module.scss';
import { ICrudoperationProps } from './ICrudoperationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICrudoperationState } from './ICrudoperationState';
import {spoperation} from '../../services/spserices';
import {Button, Dropdown, IDropdownOption} from 'office-ui-fabric-react';


export default class Crudoperation extends React.Component<ICrudoperationProps,ICrudoperationState, 
{}> {

  public _spOps:spoperation;
  public selectedListTitle:string;
 constructor(props:ICrudoperationProps){

   super(props);
   this._spOps=new spoperation();
   this.state={listTitle:[],status:""};
 }
  
 public getListTitle(event:any,data:any){
   this.selectedListTitle=data.text;

 }
 public componentDidMount(){
   this._spOps.GetAlllist(this.props.context).then((result:IDropdownOption[])=>
   this.setState({listTitle:result})

   );
 }

  public render(): React.ReactElement<ICrudoperationProps> {
   
    let option:IDropdownOption[]=[];

    return (
      <div className={ styles.crudoperation }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint spfx !!!</span>
              <p className={ styles.subTitle }>CRUD Operation Demo using rest api</p>
              </div>
              <div id="dv_parent" className={styles.mystyle}>
                <Dropdown className={styles.dropdown} options={this.state.listTitle}
                 placeholder="---Select your list ----"  onChange={this.getListTitle}>          
                </Dropdown>
                <Button className={styles.myButton} 
                text="Create list item" 
                onClick={()=>
                  this._spOps.creatlistitem(this.props.context,this.selectedListTitle).then(
                  (result:string)=>{this.setState({status:result});
                })
                }
                ></Button>
                <Button className={styles.myButton} 
                text="Update list item"                
                ></Button>
                <Button className={styles.myButton} 
                text="delete list item"                
                ></Button>

                <div>{this.state.status}</div>

              </div>
          </div>
        </div>
      </div>
    );
  }
}
