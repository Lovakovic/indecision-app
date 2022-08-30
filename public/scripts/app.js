"use strict";

console.log("App.js is on and running.");

// JSX - JavaScript XML

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// How to compile on the run with babel?
// babel [JSX file path] --out-file=[output file path] --presets=env,react --watch
