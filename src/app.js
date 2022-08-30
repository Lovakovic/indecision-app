console.log("App.js is on and running.");

// JSX - JavaScript XML

let template = <h1>Indecision App</h1>
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// How to compile on the run with babel?
// babel [JSX file path] --out-file=[output file path] --presets=env,react --watch