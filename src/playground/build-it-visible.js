class Visibility extends React.Component {
    constructor(props) {
        super(props);

        this.handleVisibility = this.handleVisibility.bind(this);

        this.state = {
            visibilityToggled: false
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>
                    {
                        this.state.visibilityToggled ? 
                            `Hide details` : `Show details`
                    }
                </button>
                {
                    this.state.visibilityToggled && <p>Meow!</p>
                }
            </div>
        );
    }

    handleVisibility(event) {
        this.setState((prevState) => {
            return {
                visibilityToggled: !prevState.visibilityToggled
            };
        }); 
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

/* const appRoot = document.getElementById("app");

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

renderVisibilityToggleApp(); */