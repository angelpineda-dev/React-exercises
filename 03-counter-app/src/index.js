/* Imports */
import React from "react";
import ReactDOM from "react-dom";
//import CounterApp from "./CounterApp";
import PrimeraApp from "./PrimeraApp";
// ********* CSS **********
import "./index.css";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo="Saludo en titulo" />, divRoot);

//ReactDOM.render(<CounterApp value={10} />, divRoot);
