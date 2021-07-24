import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class Header extends React.Component {
  signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  render() {
    return (
      <>
        <div>Header</div>
      </>
    );
  }
}

export default connect(null)(Header);
