import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Debit = (props) => {
        return (
            <div>
                {/* <h1>Debits</h1> */}
                <div>Description: {props.description}</div>
                <div>Amount: {props.amount} </div>
                <div>Date: {props.date}</div>

            </div>
        );
    
}

export default Debit;