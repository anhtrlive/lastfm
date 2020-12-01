import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import artistReducer from "./artistInfo/reducer";
import tracksReducer from "./toptracks/reducer";
import searchTrack from "./searchtrack/reducer";


const RootReducer = combineReducers({
  tracks: tracksReducer,
  artist: artistReducer,
  searchTrack: searchTrack
});

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
