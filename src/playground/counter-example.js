class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Binding context to the functions
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // Must be called state as it is a keyword!!
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div> 
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

    handleAddOne(event) {
        // This doesn't override the complete state, but rather
        // updates the variables we choose (other variables stay
        // the same)
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(event) {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset(event) {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

/* let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0; 
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); */