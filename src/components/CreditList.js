import React from "react"
import Credit from "./Credit"
import AccountBalance from "./AccountBalance"
import NewCreditForm from './NewCreditForm'

const CreditList = (props) => {
    const eachCredit = props.credits.map((credit, index) => {

        return <Credit
            key={index}
            description={credit.description}
            amount={credit.amount}
            date={credit.date}
            id={credit.id}
        />;
    });
        return (
            <div>
            <div>
                <h1>Credits</h1>
                {eachCredit}
            </div>
            <div>
                <AccountBalance credits={props.credits} debits={props.debits} />
            </div>
            <NewCreditForm addNewCredit={props.addNewCredit}/>

            </div>
        );
    };
    

    export default CreditList;