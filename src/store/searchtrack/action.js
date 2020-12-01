import axios from "axios";

export const SEARCH_TRACK_BY_NAME = 'GET_TRACK_BY_NAME';

export const searchTrack = (name) => async (dispatch) => {
  const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=e9527c6687e8c2f070da3f3c0e5b6881&format=json`)
  const data = res.data.results.trackmatches.track

  dispatch({
    type: SEARCH_TRACK_BY_NAME,
    payload: data,
  })
}