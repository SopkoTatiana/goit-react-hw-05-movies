import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import filmsAPI from 'services/FilmsAPI';
import css from './Trends.module.css';
import { Status } from '../../services/pageStatus';

export default function Trends() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.LOADING);
  const location = useLocation();

  useEffect(() => {
    filmsAPI({ option: 'trending' })
      .then(({ results }) => {
        setFilms([...results]);
        setStatus(Status.SUCCESS);
      })
      .catch(({ message }) => {
        setError(message);
        setStatus(Status.ERROR);
      });
  }, []);

  return (
    <>
      <h1 className={css.trendsHeader}>Trending today</h1>
      {status === Status.LOADING && <p>LOADING...</p>}
      {status === Status.SUCCESS && (
        <ol className={css.trendsList}>
          {films.map(({ title, id }) => (
            <li key={id} className={css.trendsListItem}>
              <Link
                className={css.trendsListItemLink}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ol>
      )}
      {status === Status.ERROR && <p>{error}</p>}
    </>
  );
}
