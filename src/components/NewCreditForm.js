import React, { Component } from 'react';

class NewCreditForm extends Component {
    constructor(prop) {
        super()

        this.defaultState = {
            newCredit: {
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

        const newCredit = {...this.state.newCredit}
        newCredit[dataAttribute] = value

        this.setState({newCredit})
    }

    addNewCredit = (event) => {
        event.preventDefault()
        this.props.addNewCredit(this.state.newCredit)
        
    }


    render() {
        return (
            <div>
                <div>
                    <h3>Add a new transaction</h3>
                <form onSubmit = {this.addNewCredit}>
                    <input type="number" name="amount" placeholder="Amount" value ={this.state.newCredit.amount} onChange={this.handleAddedChange}/>
                    <input type="text" name="description" placeholder="Description" value ={this.state.newCredit.description} onChange={this.handleAddedChange}/>
                    {/* <input type="date" name="date" placeholder="Date" value ={this.state.newCredit.amount} onChange={this.handleAddedChange}/ */}
                    <input type="submit" value= "Add New Credit" />
                </form>
                </div>
            </div>
        );
    }
}

export default NewCreditForm;