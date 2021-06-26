import React, { useState,useEffect, useRef } from "react"



export default  function Ref() {

    const [name,setname] = useState(" ");
    const renderCount =useRef(0);

    const  prevname =useRef(" ");

      useEffect(()=>{

           renderCount.current=renderCount.current+1;

      })

         
         useEffect(()=>{

             prevname.current.focus();
        
         },[])

    return(
   
         <>
           
              <input ref={prevname} value={name} onChange={e=>setname(e.target.value)} />
               
                 <input  value={name}  ref={prevname}/>
                <div>my name is {name} </div>
                <div> I rendered {renderCount.current}</div>
               
                


         </>



    );


}