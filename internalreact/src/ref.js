import React, { useState,useEffect, useRef } from "react"



export default  function Ref() {

    const [name,setname] = useState(" ");
    const renderCount =useRef(0);

    const  inputRef =useRef();

      useEffect(()=>{

           renderCount.current=renderCount.current+1;

      })


    return(
   
         <>
           
              <input value={name} onChange={e=>setname(e.target.value)} />
               
                <div>my name is {name}</div>
                <div> I rendered {renderCount.current}</div>

                


         </>



    );


}