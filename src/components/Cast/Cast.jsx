import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import filmsAPI from 'services/FilmsAPI';
import avatar from '../../img/default-avatar.webp';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [message, setMessage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    filmsAPI({ option: 'credits', movieId })
      .then(({ cast }) => {
        if (cast.length === 0) {
          throw new Error('No information about the cast is available');
        }

        setCast([...cast]);
      })
      .catch(({ message }) => setMessage(message));
  }, [movieId]);

  return (
    <>
      <p>{message}</p>
      <ul className={css.castList}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.castListItem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original/${profile_path}`
                  : avatar
              }
              alt={name}
              height="100px"
            />
            <div className={css.info}>
              <p className={css.name}>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
