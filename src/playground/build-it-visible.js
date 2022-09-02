const appRoot = document.getElementById("app");

const app = {
    name: 'Visibility Toggle',
    visibilityToggled: false,
    details: 'Meow!'
};

const onDetailsButtonClick = () => {
    app.visibilityToggled = !app.visibilityToggled;

    renderVisibilityToggleApp();
};

const renderVisibilityToggleApp = () => {

    const template = (
        <div>
            <h1>{app.name}</h1>
            <button onClick={onDetailsButtonClick}>
            {app.visibilityToggled ? 'Hide details' : 'Show details'}
            </button>
            {app.visibilityToggled && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();