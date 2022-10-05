import React, {Component} from 'react'

function App(props) {
    return (
      <div className="App">
        <button onClick={props.handleClick}>{props.children}</button>
      </div>
    );
  }

  export class App2 extends Component{
    constructor(props){
        super(props);
        this.name="舊的名子";
        this.changeName=this.changeName.bind(this);
    }

    changeName=(newName)=>{
        this.name=newName;
        console.log("hey");
      }
    render(){
        return(
            <div>
                <div>helloworld</div>
                <button onClick={this.props.handleClick}>{this.props.name}</button>
                <button onClick={this.changeName}>{this.name}</button>
            </div>

        );
    }
  }
  
  export default App;