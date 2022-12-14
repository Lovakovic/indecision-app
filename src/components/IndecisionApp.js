import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToRemove;
            })
        }));
    }

    handlePick = () => {
        const chosenOption = this.state.options[
            Math.floor(Math.random() * this.state.options.length)
        ];

        this.setState(() => ({
            selectedOption: chosenOption
        }));
    }

    handleAddOption = (option) => {
        if(!option) {
            return `Invalid option entered.`;
        } else if (this.state.options.indexOf(option) > -1) {
            return `No duplicating items!`;
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    // lifecycle method 

    componentDidMount() {
        try {
            const json = localStorage.getItem(`options`);
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // oops, is empty! 
        }
    }

    // lifecycle method

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem(`options`, json);
        }
    }

    // lifecycle method

    componentWillUnmount() {
        console.log(`componentWillUnmount`);
    }

    render() {
        const subtitle = `Put your life in the hands of a computer.`;

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}