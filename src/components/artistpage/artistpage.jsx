import { useDispatch, useSelector } from 'react-redux';
import { getAristInfo } from '../../store/artistInfo/action';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleArtist, TagButton } from './styled/artistpage';

export default function ArtistInfo() {
  const dispatch = useDispatch();
  const { name } = useParams();
  const artist = useSelector((state) => state.artist.artist);

  useEffect(() => {
    dispatch(getAristInfo(name));
    return () => {
      dispatch(getAristInfo(''));
    };
  }, [dispatch, name]);

  return (
    <ArticleArtist>
      {artist && (
        <>
          <h2>{artist.name}</h2>
          <div className="imgWrapper">
            <img src={artist.image[3]['#text']} alt={artist.name} />
          </div>
          <p>{artist.bio.content.split('<a href')[0]}</p>
          <section>
            {artist.tags.tag &&
              artist.tags.tag.map((tag) => {
                return (
                  <a href={tag.url} key={tag.name}>
                    <TagButton>{tag.name}</TagButton>
                  </a>
                );
              })}
          </section>
        </>
      )}
    </ArticleArtist>
  );
}
