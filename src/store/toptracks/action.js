import axios from "axios";

export const GET_TOP_TRACKS = 'GET_TOP_TRACKS';
export const MORE_TOP_TRACKS = 'MORE_TOPE_TRACKS';
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const getTopTracks = (numberPage = 1) => async (dispatch) => {
  const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=${numberPage}&limit=49&api_key=e9527c6687e8c2f070da3f3c0e5b6881&format=json`)
  const data = res.data.tracks.track

  dispatch({
    type: GET_TOP_TRACKS,
    payload: data,
  })
}

export const getMoreTracks = (numberPage) => async (dispatch) => {
  const res = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=${numberPage}&limit=49&api_key=e9527c6687e8c2f070da3f3c0e5b6881&format=json`)
  const data = res.data.tracks.track

  dispatch({
    type: MORE_TOP_TRACKS,
    payload: data,
  })
}

export const setPageNumber = (numberPage) => async (dispatch) => {
  dispatch({
    type: SET_PAGE_NUMBER,
    payload: numberPage,
  })
}