import {
  SEARCH_TRACK_BY_NAME
} from './action';

const defaultState = {
  searchTrack: [],
};

const searchTrack = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_TRACK_BY_NAME:
      return {
        ...state,
        searchTrack: action.payload,
      };
    default:
      return state;
  }
};

export default searchTrack;