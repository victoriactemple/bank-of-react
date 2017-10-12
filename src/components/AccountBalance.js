import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class AccountBalance extends Component {

calculateAccountBalance = () => {
 const creditTotal = this.props.credits.reduce((accu, credit) => {
        return accu + credit.amount
    }, 0 )


const debitTotal = this.props.debits.reduce((accu, debit) => {
return accu + debit.amount
}, 0)

return creditTotal - debitTotal

}




    render() {
        const accountBalance = this.calculateAccountBalance()
        return (
            <div>
              <h1> Your Balance is </h1>
              <div>
                  {accountBalance.toFixed(2)}
              </div>
                <br />
                <Link to ="/">Home</Link>
                <br />
            
            </div>
        );
    }
}

export default AccountBalance;