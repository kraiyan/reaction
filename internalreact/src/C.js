import D from "./D"
import { useEffect } from "react";

const C = (props) => {

  useEffect(() => {
    // Runs once, after mounting
    document.title = 'Welcome to C tab';
  }, []);

    return (
      <>
        <div><h1>In C</h1></div>
        <div>{props.propoB1.key1}</div>
        <div>{props.propoB1.key2}</div>
        <div>{props.propoB1.key3}</div>

         <D propsC1= {props.propoB1} />

    
      </>
    );
  };
  
  export default C;