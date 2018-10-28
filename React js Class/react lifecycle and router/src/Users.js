import React from 'react';
import { users } from './userData';

class Users extends React.Component {
  state = {};

  viewUserData = (user) => {

  this.props.history.push({
    pathname: '/user/' + user.id,
    state: user
  });
  }
  render() {
    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.name} - {user.email} <button onClick= {
                () => {this.viewUserData(user)}
              } >View</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Users;
