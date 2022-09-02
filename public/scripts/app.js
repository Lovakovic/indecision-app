'use strict';

var appRoot = document.getElementById("app");

var app = {
    name: 'Visibility Toggle',
    visibilityToggled: false,
    details: 'Meow!'
};

var onDetailsButtonClick = function onDetailsButtonClick() {
    app.visibilityToggled = !app.visibilityToggled;

    renderVisibilityToggleApp();
};

var renderVisibilityToggleApp = function renderVisibilityToggleApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.name
        ),
        React.createElement(
            'button',
            { onClick: onDetailsButtonClick },
            app.visibilityToggled ? 'Hide details' : 'Show details'
        ),
        app.visibilityToggled && React.createElement(
            'p',
            null,
            app.details
        )
    );

    ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();
