import React from 'react';
import { users } from './userData';

class User extends React.Component {
  state = { user: null };

  componentDidMount() {
    // let user = users.find(
    //   user => user.id === parseInt(this.props.match.params.userId, 10)
    // );
    if(this.props.location.state) {
      this.setState({
        user: this.props.location.state,
      });
    }
  }
  render() {
    console.log(this.props);
    if(this.state.user) {
      return  <div>
        <h1>User {this.props.match.params.userId} </h1>
        <p>{this.state.user.name} - {this.state.user.email}</p>
      </div>;

    }
    return <h1>User Not Found</h1>
  }
}

export default User;
