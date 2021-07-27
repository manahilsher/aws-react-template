import React from 'react';
import { connect } from 'react-redux';

import { fetchThingThunk, unselectThingThunk } from '../store/actions';

class Thing extends React.Component {
  async componentDidMount() {
    await this.props.fetchThingThunk(this.props.match.params.id);
  }

  async componentWillUnmount() {
    await this.props.unselectThingThunk();
  }

  render() {
    return (
      <>
        <div>Thing {this.props.thing ? this.props.thing.id : ''}</div>
      </>
    );
  }
}

const mapState = state => {
  return {
    thing: state.thingsReducer.selectedThing
  };
};

export default connect(mapState, {
  fetchThingThunk,
  unselectThingThunk
})(Thing);
