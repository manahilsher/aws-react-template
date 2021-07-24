import React from 'react';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  state = {
    user: null,
    authFailed: false
  };

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(async () => {
        const user = await Auth.currentUserInfo();
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ authFailed: true });
      });
  }

  render() {
    if (this.state.authFailed) return <Redirect to='/login' />;
    return (
      <>{this.state.user ? <div>{this.state.user.username}</div> : null}</>
    );
  }
}

export default connect(null)(Profile);
