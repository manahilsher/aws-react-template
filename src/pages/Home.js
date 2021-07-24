import React from 'react';
import { connect } from 'react-redux';

import {
  fetchItemsThunk,
  subscribeItemsListener,
  unsubscribeItemsListener
} from '../store/actions';

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchItemsThunk();
    await this.props.subscribeItemsListener();
  }

  async componentWillUnmount() {
    await this.props.unsubscribeItemsListener();
  }

  renderItems = () => {
    let items = this.props.items.map(i => {
      return <div key={i.id}>Item {i.id}</div>;
    });
    return items;
  };

  render() {
    return (
      <>
        <div>Home</div>
        <div>{this.props.items ? this.renderItems() : null}</div>
      </>
    );
  }
}

const mapState = state => {
  return {
    items: state.itemsReducer.items
  };
};

export default connect(mapState, {
  fetchItemsThunk,
  subscribeItemsListener,
  unsubscribeItemsListener
})(Home);
