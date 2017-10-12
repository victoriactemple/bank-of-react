import React, { Component } from 'react';
// It's called BroswerRouter, but let's rename it to Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance'
import UserProfile from './components/UserProfile'
import DebitList from './components/DebitList'
import CreditList from './components/CreditList'


import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      accountBalance: '',
      user: {
        userName: "Mary",
        memberSince: "1999"
      },
      debits: [],
      credits: []
    }
  }

  getDebits = () => {
    axios.get(`http://localhost:4000/debits`)
      .then((response) => {
        const debits = response.data
        this.setState({ debits })
      })
      .catch((error) => {
        console.log("error")
      })
  }

  getCredits = () => {
    axios.get(`http://localhost:4000/credits`)
      .then((response) => {
        const credits = response.data
        this.setState({ credits })
      })
      .catch((error) => {
        console.log("error")
      })
  }

  addNewDebit = (newDebit) => {
    const debits = [...this.state.debits]
    debits.push(newDebit)
    this.setState({debits})
  };

  addNewCredit = (newCredit) => {
    const credits = [...this.state.credits]
    credits.push(newCredit)
    this.setState({credits})
  };

  componentWillMount() {
    this.getDebits()
    this.getCredits()
  }

  render() {
    const AccountBalanceWrapper = () => {
      return (<AccountBalance accountBalance={this.state.accountBalance} debits={this.state.debits} credits={this.state.credits}/>)
    }
    const UserProfileWrapper = () => {
      return (<UserProfile userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
    }
    const DebitWrapper = () => {
      return (<DebitList
      addNewDebit={this.addNewDebit}
        debits={this.state.debits}
        credits={this.state.credits}
      />)
    }
    const CreditWrapper = () => {
      return(<CreditList 
      addNewCredit = {this.addNewCredit}
      debits={this.state.debits}
       credits={this.state.credits}
      />)
    }

    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/user" render={UserProfileWrapper} />
          <Route exact path="/debits" render={DebitWrapper} />
          <Route exact path="/credits" render={CreditWrapper} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;