import C from "./C";

const B = (props) => {
  return (
    <>
      <div><h1>inB</h1></div>
      <div>{props.propo1}</div>
      <div>{props.propo2}</div>
      <div>{props.propo3}</div>
      

      <button onClick={props.updateFunction}>Click to update from B</button>
      <C propoB1={props.propo1} propsB2={props.propo2} propsB3={props.propo3} />
    </>

  );
};

  export default B;