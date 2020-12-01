import { useDispatch, useSelector } from 'react-redux';
import {
  getTopTracks,
  getMoreTracks,
  setPageNumber,
} from '../../store/toptracks/action';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Article, ListItem } from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function HomePage() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.tracks);
  const pageNumber = useSelector((state) => state.tracks.pageNumber);

  useEffect(() => {
    if (pageNumber === 1) {
      dispatch(getTopTracks());
    }
  }, [dispatch, pageNumber]);

  const moreTopTrackeHadler = () => {
    dispatch(setPageNumber(pageNumber + 1));
    dispatch(getMoreTracks(pageNumber + 1));
  };
  return (
    <InfiniteScroll
      dataLength={tracks.length}
      hasMore={true}
      next={moreTopTrackeHadler}
      loader={<div className="loader">Loading ...</div>}
    >
      <ul>
        {tracks &&
          tracks.map((track, index) => {
            return (
              <ListItem key={track.name + track.artist.name}>
                <Article>
                  <section>
                    <img src={track.image[0]['#text']} alt={track.name} />
                    <p>{index + 1}</p>
                    <p>{track.name}</p>
                  </section>
                  <section>
                    <Link to={`/${track.artist.name.split(' ').join('+')}`}>
                      {track.artist.name}
                    </Link>
                    <a href={track.url}>last.fm</a>
                  </section>
                </Article>
              </ListItem>
            );
          })}
      </ul>
    </InfiniteScroll>
  );
}
