import React from "react";
import ReactDOM from "react-dom";

let user:string;
user = "awesome";
console.log(`user is ${user}`);


class App extends React.Component{
    render(){
        return <h1>Hello</h1>;
    }
}



ReactDOM.render(<App/>, document.getElementById("container"));