
  import { useEffect } from "react";
  
const D = (props) => {
   
    
    
  useEffect(() => {
    // Runs once, after mounting
    document.title = 'Welcome to D tab';
  }, []);


  
    
      
    return(
   
         <div>
        <h1>{props.propsC1.key1}  from D</h1>
        <h1>{props.propsC1.key2}  from D</h1>
        <h1>{props.propsC1.key3}  from D</h1>
        </div>
    );
  
  };
  
  export default D;
  