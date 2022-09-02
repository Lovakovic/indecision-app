// How to compile on the run with babel?
// babel [JSX file path] --out-file=[output file path] --presets=env,react --watch

console.log("App.js is on and running!");

// JSX - JavaScript XML

const app = { 
    title: 'Indecision App',
    subtitle: 'Make your decisions faster.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);

        e.target.elements.option.value = '';

        renderIndecisionApp();
    }
};

const onRemoveAll = (e) => {
    app.options = [];

    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum =  Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum];

    alert(option);
};

const appRoot = document.getElementById("app");

const numbers = [15, 22, 45, 99];

const renderIndecisionApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();