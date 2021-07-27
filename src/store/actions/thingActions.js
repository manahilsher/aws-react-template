import {
  CREATE_THING,
  FETCH_THINGS,
  FETCH_THING,
  UNSELECT_THING,
  UPDATE_THING
  // DELETE_THING
} from './types';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createThing, updateThing } from '../../graphql/mutations';
import { listThings, getThing } from '../../graphql/queries';

import awsExports from '../../aws-exports';
import { onCreateThing, onUpdateThing } from '../../graphql/subscriptions';
Amplify.configure(awsExports);

/* THINGS */

export const createThingThunk = thing => async () => {
  console.log('createThingThunk', thing);
  try {
    await API.graphql(graphqlOperation(createThing, { input: thing }));
  } catch (err) {
    console.log('error creating thing:', err);
  }
};

export const fetchThingsThunk = () => async dispatch => {
  console.log('fetchThingsThunk');
  try {
    const thingData = await API.graphql(graphqlOperation(listThings));
    const things = thingData.data.listThings.items;
    dispatch({ type: FETCH_THINGS, payload: things });
  } catch (err) {
    console.log('error fetching things', err);
  }
};

export const fetchThingThunk = id => async dispatch => {
  console.log('fetchThingThunk', id);
  try {
    const thingData = await API.graphql(graphqlOperation(getThing, { id: id }));
    const thing = thingData.data.getThing;
    dispatch({ type: FETCH_THING, payload: thing });
  } catch (err) {
    console.log('error fetching thing', err);
  }
};

export const unselectThingThunk = () => dispatch => {
  console.log('unselectThingThunk');
  dispatch({ type: UNSELECT_THING });
};

export const editThingThunk = thing => async () => {
  console.log('editThingThunk', thing);
  try {
    await API.graphql(graphqlOperation(updateThing, { input: thing }));
  } catch (err) {
    console.log('error updating thing:', err);
  }
};

export const deleteThingThunk = id => () => {
  console.log('delete thing', id);
};

export const subscribeThings = () => async dispatch => {
  console.log('subscribeThings');

  // create
  await API.graphql(graphqlOperation(onCreateThing)).subscribe({
    next: ({ provider, value }) => {
      const createdThing = value.data.onCreateThing;
      dispatch({
        type: CREATE_THING,
        payload: createdThing
      });
    },
    error: error => console.warn(error)
  });

  // update
  await API.graphql(graphqlOperation(onUpdateThing)).subscribe({
    next: ({ provider, value }) => {
      const updatedThing = value.data.onUpdateThing;
      dispatch({
        type: UPDATE_THING,
        payload: updatedThing
      });
    },
    error: error => console.warn(error)
  });
};

export const unsubscribeThings = () => async dispatch => {
  console.log('subscribeThings');

  try {
    await API.graphql(graphqlOperation(onCreateThing)).unsubscribe();
    await API.graphql(graphqlOperation(onUpdateThing)).unsubscribe();
  } catch (err) {
    console.log('error unsubscribing to things:', err);
  }
};
