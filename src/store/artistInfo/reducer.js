import {
  GET_ARTIST_INFO
} from './action';

const defaultState = {
  artist: null,
};

const artistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ARTIST_INFO:
      return {
        ...state,
        artist: action.payload,
      };
    default:
      return state;
  }
};

export default artistReducer;