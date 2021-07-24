import {
  CREATE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  UNSELECT_ITEM,
  UPDATE_ITEM
  // DELETE_ITEM
} from './types';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createItem, updateItem } from '../../graphql/mutations';
import { listItems, getItem } from '../../graphql/queries';

import awsExports from '../../aws-exports';
import { onCreateItem, onUpdateItem } from '../../graphql/subscriptions';
Amplify.configure(awsExports);

/* ITEMS */

export const createItemThunk = item => async () => {
  console.log('createItemThunk', item);
  try {
    await API.graphql(graphqlOperation(createItem, { input: item }));
  } catch (err) {
    console.log('error creating item:', err);
  }
};

export const fetchItemsThunk = () => async dispatch => {
  console.log('fetchItemsThunk');
  try {
    const itemData = await API.graphql(graphqlOperation(listItems));
    const items = itemData.data.listItems.items;
    dispatch({ type: FETCH_ITEMS, payload: items });
  } catch (err) {
    console.log('error fetching items', err);
  }
};

export const fetchItemThunk = id => async dispatch => {
  console.log('fetchItemThunk', id);
  try {
    const itemData = await API.graphql(graphqlOperation(getItem, { id: id }));
    const item = itemData.data.getItem;
    dispatch({ type: FETCH_ITEM, payload: item });
  } catch (err) {
    console.log('error fetching item', err);
  }
};

export const unselectItemThunk = () => dispatch => {
  console.log('unselectItemThunk');
  dispatch({ type: UNSELECT_ITEM });
};

export const editItemThunk = item => async () => {
  console.log('editItemThunk', item);
  try {
    await API.graphql(graphqlOperation(updateItem, { input: item }));
  } catch (err) {
    console.log('error updating item:', err);
  }
};

export const deleteItemThunk = id => () => {
  console.log('delete item', id);
};

export const subscribeItems = () => async dispatch => {
  console.log('subscribeItems');

  // create
  await API.graphql(graphqlOperation(onCreateItem)).subscribe({
    next: ({ provider, value }) => {
      const createdItem = value.data.onCreateItem;
      dispatch({
        type: CREATE_ITEM,
        payload: createdItem
      });
    },
    error: error => console.warn(error)
  });

  // update
  await API.graphql(graphqlOperation(onUpdateItem)).subscribe({
    next: ({ provider, value }) => {
      const updatedItem = value.data.onUpdateItem;
      dispatch({
        type: UPDATE_ITEM,
        payload: updatedItem
      });
    },
    error: error => console.warn(error)
  });
};

export const unsubscribeItems = () => async dispatch => {
  console.log('subscribeItems');

  try {
    await API.graphql(graphqlOperation(onCreateItem)).unsubscribe();
    await API.graphql(graphqlOperation(onUpdateItem)).unsubscribe();
  } catch (err) {
    console.log('error unsubscribing to items:', err);
  }
};
