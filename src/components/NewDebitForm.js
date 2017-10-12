import React, { Component } from 'react';

class NewDebitForm extends Component {
    constructor(prop) {
        super()

        this.defaultState = {
            newDebit: {
                amount: null,
                description: "",
                // needed solutions for the date!!
                date: Date.now()
            },
        }

        this.state = {...this.defaultState}
    }

// AND needed solutions to figure out the form! 

    handleAddedChange = (event) => {
        const dataAttribute = event.target.name
        let value = event.target.value

        if (dataAttribute === "amount"){
            value = Number(value)
        }

        const newDebit = {...this.state.newDebit}
        newDebit[dataAttribute] = value

        this.setState({newDebit})
    }

    addNewDebit = (event) => {
        event.preventDefault()
        this.props.addNewDebit(this.state.newDebit)
        
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Add a new transaction</h3>
                <form onSubmit = {this.addNewDebit}>
                    <input type="number" name="amount" placeholder="Amount" value ={this.state.newDebit.amount} onChange={this.handleAddedChange}/>
                    <input type="text" name="description" placeholder="Description" value ={this.state.newDebit.description} onChange={this.handleAddedChange}/>
                    {/* <input type="date" name="date" placeholder="Date" value ={this.state.newDebit.amount} onChange={this.handleAddedChange}/ */}
                    <input type="submit" value= "Add New Debit" />
                </form>
                </div>
            </div>
        );
    }
}

export default NewDebitForm;