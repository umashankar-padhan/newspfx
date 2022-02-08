import { WebPartContext } from "@microsoft/sp-webpart-base";
import {SPHttpClient,SPHttpClientResponse,ISPHttpClientOptions} from '@microsoft/sp-http';
import { IDropdownOption } from "office-ui-fabric-react";

export class spoperation{
  /* Get all list in Site collection */
    public GetAlllist(context:WebPartContext):Promise<IDropdownOption[]>{

        return new Promise<IDropdownOption[]>(async(resolve,reject)=>{
            let restApiUrl:string=context.pageContext.web.absoluteUrl+"/_api/web/lists?select=Title"
            var listTiles:IDropdownOption[]=[];
     context.spHttpClient.get(restApiUrl,SPHttpClient.configurations.v1)
     .then((response:SPHttpClientResponse)=>{
         response.json().then((results:any)=>{
           console.log(results);
           results.value.map((result:any)=>{

            listTiles.push({key:result.Title,text:result.Title})

           });
         });
         resolve(listTiles);
       },(error:any):void=>{
           reject("error occured"+error)
       });

        });
     
     

    }

    /**
     * Creat operattion
     */
    public creatlistitem(context:WebPartContext,listTitle:string):Promise<String>{

      let restApiUrl:string=context.pageContext.web.absoluteUrl+"/api/web/lists/getByTitle('"+listTitle+"')/items";
      const body:string=JSON.stringify({Title:"New Test Item created "});
      const options:ISPHttpClientOptions={headers:{
        Accept:"application/json;odata=nometadata",
        "content-type":"application/json;odata=nometadata",
        "odata-version":"",
      },
      body:body,
    };
      return new Promise<string>(async(resolve,reject)=>{
        context.spHttpClient.post(restApiUrl,SPHttpClient.configurations.v1,options).
        then((response:SPHttpClientResponse)=>{
          response.json().then(
            (result:any)=>{
              resolve("Item with id "+ result.ID+"created successfully");
            },
            (error:any)=>{
              reject("error occurred"+error)
            }
          )
        });

      });

    }
}