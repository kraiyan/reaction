import D from "./D"

const C = (props) => {


    return (
      <>
        <div><h1>In C</h1></div>
        <div>{props.propoB1}</div>
        <div>{props.propsB2}</div>
        <div>{props.propsB3}</div>

         <D propsC1= {props.propoB1} propsC2={props.propsB2} propsC3= {props.propsB3} />

    
      </>
    );
  };
  
  export default C;