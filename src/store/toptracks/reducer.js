import {GET_TOP_TRACKS, MORE_TOP_TRACKS, SET_PAGE_NUMBER} from './action'

const defaultState = {
  tracks: [],
  pageNumber: 1
}

const tracksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOP_TRACKS:
      return {
        ...state,
        tracks: action.payload  
      }
    case MORE_TOP_TRACKS:
      return {
        ...state,
        tracks: state.tracks.concat(action.payload)
      }
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload
      }      
    default: 
      return state
  }
};

export default tracksReducer;
