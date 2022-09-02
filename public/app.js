'use strict';

// How to compile on the run with babel?
// babel [JSX file path] --out-file=[output file path] --presets=env,react --watch

console.log("App.js is on and running.");

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Make your decisions faster.',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    console.log('addOne', count);
};

var minusOne = function minusOne() {
    return console.log('minusOne');
};

var reset = function reset() {
    return console.log('reset');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

console.log(templateTwo);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);