import React from 'react';
import User from './User';
import UserConsumer from '../context';

const Users = () => {
  return (
    <UserConsumer>
      {
        value => {
          const { users } = value;
          return (
            <div className="user-box">
              {
                users.map(user => (
                  <User key={user.id} user={user} />
                ))
              }
            </div>
          )
        }
      }
    </UserConsumer>
  );
}

export default Users;