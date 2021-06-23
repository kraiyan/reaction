
import React from "react";
   import './App.css'
class App extends React.Component {

  constructor(props)
    {
        super(props);
        this.state = {  value : "",
                         name : "" };
    }

    changeName = () => {

      this.setState({value : "Ayyan",
                      name: "khan"});
    }

    handleChange = (event) => {
      this.setState({  value : event.target.value });
    };
    handlesurname = (event) => {
      this.setState({  name: event.target.value });
    };

  render() {
    return(

       <>

       <div className="myname">
      <h2>Hello there   {this.state.value} {this.state.name} </h2>
         <h3>Please enter your name </h3>
      <form>
         <label htmlFor="username">First Name</label>
         <input className="myinput"
           type="text"
           name="username"
           value={this.state.value}
           onChange={this.handleChange}
         />
       </form>
       <form>
         <label htmlFor="username">Last  Name</label>
         <input className="myinput"
           type="text"
           name="username"
           value={this.state.name}
           onChange={this.handlesurname}
         />
       </form>

      <  button className="buttons"
      type="button"
      onClick={this.changeName}
    >       Change the Name to default </button>




                </div>
     </>
    );
    
       
  }
}
  
export default App