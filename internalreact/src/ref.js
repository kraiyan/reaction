import React, { useState,useEffect, useRef } from "react"



export default  function Ref() {

    const [name,setname] = useState(" ");
    const renderCount =useRef(0);

    const  prevname =useRef(" ");

      useEffect(()=>{

           renderCount.current=renderCount.current+1;

      })

         
         useEffect(()=>{


            prevname.current=name;
         },[name])

    return(
   
         <>
           
              <input value={name} onChange={e=>setname(e.target.value)} />
               
                <div>my name is {name} and it used to be{prevname.current}</div>
                <div> I rendered {renderCount.current}</div>
               
                


         </>



    );


}