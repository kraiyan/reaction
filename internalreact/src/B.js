import C from "./C";
import { useEffect } from "react";

const B = (props) => {


  useEffect(() => {
    // Runs once, after mounting
    document.title = 'Welcome to B tab';
  }, []);
  
  return (
    <>
      <div><h1>inB</h1></div>
      <div>{props.propo1.key1}</div>
      <div>{props.propo1.key2}</div>
      <div>{props.propo1.key3}</div>
      

      <button onClick={props.updateFunction}>Click to update from B</button>
      <C propoB1={props.propo1} />
    </>

  );
};

  export default B;