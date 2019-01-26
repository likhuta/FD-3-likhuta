
"use strict";

function EOsaveClient(all, param, workModel) {


  let newClient=[...all]
  if(workModel===3){
     newClient=[...newClient,param ]
  }
  if(workModel===2){

  newClient.forEach((item,i)=>{
      if(item.id===param.id){
        newClient[i]=param;
      }
    })
 }

  return newClient;
    
}

export {EOsaveClient};