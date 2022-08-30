console.log("App.js is on and running.");

// JSX - JavaScript XML

let template = React.createElement("h1", {
    id: "h1_id"
  }, "This is JSX from app.js!");
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);