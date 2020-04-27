import ReactDOM from "react-dom";
import Form from "./js/components/Form";
import React from "react";


let user:string;
user="ok";
console.log(`user is ${user}!`);



const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form/>, wrapper) : false;