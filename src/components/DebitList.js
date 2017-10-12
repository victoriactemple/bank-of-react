import React from "react"
import Debit from "./Debit"
import AccountBalance from "./AccountBalance"
import NewDebitForm from './NewDebitForm'

const DebitList = (props) => {
    const eachDebit = props.debits.map((debit, index) => {

        return <Debit
            key={index}
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            id={debit.id}
        />;
    });
        return (
            <div>
            <div>
                <h1>Debits</h1>
                {eachDebit}
            </div>
            <div>
               <AccountBalance credits={props.credits} debits={props.debits} />
            </div>
            <div>
            <NewDebitForm addNewDebit={props.addNewDebit}/>

            </div>
            </div>
        );
    };
    

    export default DebitList;