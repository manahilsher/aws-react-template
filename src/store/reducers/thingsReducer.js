import {
  CREATE_THING,
  FETCH_THINGS,
  FETCH_THING,
  UNSELECT_THING,
  UPDATE_THING,
  DELETE_THING
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { things: [] }, action) => {
  switch (action.type) {
    case CREATE_THING:
      let newStateWithCreatedThing = { ...state };
      newStateWithCreatedThing.things.push(action.payload.createdThing);
      return newStateWithCreatedThing;
    case FETCH_THINGS:
      return { ...state, things: action.payload };
    case FETCH_THING:
      return { ...state, selectedThing: action.payload };
    case UNSELECT_THING:
      let newStateWithUnselectedThing = { ...state };
      delete newStateWithUnselectedThing.selectedThing;
      return newStateWithUnselectedThing;
    case UPDATE_THING:
      let newStateWithUpdatedThing = { ...state };
      let thingIdx = state.things.findIndex(t => t.id === action.payload.id);
      newStateWithUpdatedThing.things[thingIdx] = action.payload;
      return newStateWithUpdatedThing;
    case DELETE_THING:
      let newStateWithDeletedThing = { ...state };
      newStateWithDeletedThing.things = state.things.filter(
        a => a.id !== action.payload.id
      );
      return newStateWithDeletedThing;
    default:
      return state;
  }
};
