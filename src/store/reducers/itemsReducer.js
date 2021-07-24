import {
  CREATE_ITEM,
  FETCH_ITEMS,
  FETCH_ITEM,
  UNSELECT_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { items: [] }, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      let newStateWithCreatedItem = { ...state };
      newStateWithCreatedItem.items.push(action.payload.createdItem);
      return newStateWithCreatedItem;
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case FETCH_ITEM:
      return { ...state, selectedItem: action.payload };
    case UNSELECT_ITEM:
      let newStateWithUnselectedItem = { ...state };
      delete newStateWithUnselectedItem.selectedItem;
      return newStateWithUnselectedItem;
    case UPDATE_ITEM:
      let newStateWithUpdatedItem = { ...state };
      let itemIdx = state.items.findIndex(a => a.id === action.payload.id);
      newStateWithUpdatedItem.items[itemIdx] = action.payload;
      return newStateWithUpdatedItem;
    case DELETE_ITEM:
      let newStateWithDeletedItem = { ...state };
      newStateWithDeletedItem.items = state.items.filter(
        a => a.id !== action.payload.id
      );
      return newStateWithDeletedItem;
    default:
      return state;
  }
};
