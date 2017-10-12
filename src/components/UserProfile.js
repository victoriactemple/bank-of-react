import React, {Component} from 'react';
// faster, not refreshing the page, write really expressive routes for the user/client to know where they are. Just hiding and showing components
import { Link } from 'react-router-dom'

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}
          </div>
      <br />
      
          <Link to ="/account"> Account Balance </Link>
          <br />
          <Link to ="/">Home</Link> 
        

        </div>
    );
  }
}

export default UserProfile;