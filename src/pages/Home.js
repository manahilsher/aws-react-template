import React from 'react';
import { connect } from 'react-redux';

import {
  fetchThingsThunk,
  subscribeThings,
  unsubscribeThings
} from '../store/actions';

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchThingsThunk();
    await this.props.subscribeThings();
  }

  async componentWillUnmount() {
    await this.props.unsubscribeThings();
  }

  renderThings = () => {
    let things = this.props.things.map(i => {
      return <div key={i.id}>Thing {i.id}</div>;
    });
    return things;
  };

  render() {
    return (
      <>
        <div>Home</div>
        <div>{this.props.things ? this.renderThings() : null}</div>
      </>
    );
  }
}

const mapState = state => {
  return {
    things: state.thingsReducer.things
  };
};

export default connect(mapState, {
  fetchThingsThunk,
  subscribeThings,
  unsubscribeThings
})(Home);
