import { useState } from "react";
import axios from "axios";




const Api = ()=>{

     const [name,setName]= useState("");
     const [pass,setpass]= useState("");
     

     const sendata= async(e) =>{
  
            try {
                
             e.preventDefault();
         const resp= await axios.get(" https://crudcrud.com/api/09efa963d3c543e5b9e0897e80b41c61/"+name,{

                name,
                pass
         });

          console.log(resp);
        }
         catch (error) {
                
             console.log(error);
        }
         
            
     

     }

 return(
  <>
    <h1>Chaliye shuru kartey hain!!</h1>
    
    
    <form onSubmit={sendata}>
    
      <input placeholder="enter your name" style={{ padding:"20px", marginBottom:"20px" ,borderStyle: "dotted",caretColor:"red"}} value={name} onChange={(e)=> setName(e.target.value)}/>
    
 
    
      <input placeholder="enter your password"    style={{ padding:"20px", marginBottom:"20px" ,borderStyle: "dotted",caretColor:"red"}} value = {pass} onChange={(e)=>setpass(e.target.value)} />
    

       <button type="submit" onSubmit={sendata}> submit form</button>
             

       </form>

      </>
 );


};

export default Api