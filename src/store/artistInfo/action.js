import axios from "axios";

export const GET_ARTIST_INFO = 'GET_ARTIST_INFO';

export const getAristInfo = (name) => async (dispatch) => {
  const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=e9527c6687e8c2f070da3f3c0e5b6881&format=json`)
  const data = res.data.artist

  dispatch({
    type: GET_ARTIST_INFO,
    payload: data,
  })
}