import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchTrack } from '../../store/searchtrack/action';
import { Link } from 'react-router-dom';
import { SearhInput, SubmitButton, ListItem } from './styled';

export default function SearchTrack() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.searchTrack.searchTrack);

  useEffect(() => {
    return () => {
      dispatch(searchTrack(' '));
    };
  }, [dispatch]);

  const searcTrackHandler = (evt) => {
    evt.preventDefault();
    dispatch(searchTrack(value));
  };

  return (
    <>
      <form onSubmit={searcTrackHandler}>
        <SearhInput
          type="Search Track"
          onChange={(evt) => {
            setValue((value) => evt.target.value);
          }}
          placeholder="Search for music..."
          value={value}
        />
        <SubmitButton type="submit">Search</SubmitButton>
      </form>
      <ul>
        {tracks &&
          tracks.map((track) => {
            return (
              <ListItem key={track.name + track.artist}>
                <section>
                  <p>{track.name}</p>
                </section>
                <section>
                  <Link to={`/${track.artist.split(' ').join('+')}`}>
                    {track.artist}
                  </Link>
                </section>
              </ListItem>
            );
          })}
      </ul>
    </>
  );
}
