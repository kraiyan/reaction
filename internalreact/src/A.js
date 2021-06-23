import { useState } from "react";
import B from "./B";
import "./App.css"



const A = () => {
  const [name, setNames] = useState({

    key1: "Hi!",
    key2: "NAmsste",
    key3: "Poekmone"

    
});

  const handleUpdate = () => {
    setNames({
        ...name,
         key1: "Hello there",
        
           key3: "kem chu",
            

           

     
    });

     
  };

  return (
    <>
      <div className="myname">
              <h1>{name.key1}</h1>
              <h1>{name.key2}</h1>
              <h2>{name.key3}</h2>

              <button onClick={handleUpdate}>update from A</button>
        <B updateFunction={handleUpdate} propo1={name.key1} propo2 ={name.key2} propo3={name.key3} />

    
           
        <br />
        
      </div>
    </>
  );
};

export default A;