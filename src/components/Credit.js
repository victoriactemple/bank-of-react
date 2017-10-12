import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Credit = (props) => {
        return (
            <div>
                {/* <h1>Credits</h1> */}
                <div>Description: {props.description}</div>
                <div>Amount: {props.amount} </div>
                <div>Date: {props.date}</div>

            </div>
        );
    
}

export default Credit;