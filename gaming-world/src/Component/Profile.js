import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth0;

    return (
      <div>
        {isAuthenticated ? (
          <div>
            <h2>Welcome, {user.nickname}!</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <div>
            <h2>Please log in to view your profile.</h2>
            {/* You can add a link to the login page here if needed */}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
