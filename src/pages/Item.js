import React from 'react';
import { connect } from 'react-redux';

import { fetchItemThunk, unselectItemThunk } from '../store/actions';

class Item extends React.Component {
  async componentDidMount() {
    await this.props.fetchItemThunk(this.props.match.params.id);
  }

  async componentWillUnmount() {
    await this.props.unselectItemThunk();
  }

  render() {
    return (
      <>
        <div>Item {this.props.item ? this.props.item.id : ''}</div>
      </>
    );
  }
}

const mapState = state => {
  return {
    item: state.itemsReducer.selectedItem
  };
};

export default connect(mapState, {
  fetchItemThunk,
  unselectItemThunk
})(Item);
