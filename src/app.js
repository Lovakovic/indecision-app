import React from 'react';
import ReactDOM from 'react-dom/client';
import validator from 'validator';


console.log(validator.isEmail('marko@markovic.hr'));

const template = <p>Hello from webpack JSX!</p>;
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(template);