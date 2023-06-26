import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import filmsAPI from 'services/FilmsAPI';
import css from './Search.module.css';
import { Status } from 'services/pageStatus';

export default function Search() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    setStatus('loading');
    filmsAPI({ option: 'search', query })
      .then(({ results }) => {
        if (results.length === 0) {
          throw new Error('No matches found');
        }

        setStatus(Status.SUCCESS);
        setFilms(results);
      })
      .catch(error => {
        setStatus(Status.ERROR);
        setError(error.message);
      });
  }, [searchParams]);

  const submitHandle = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    const newParams = query === '' ? {} : { query };

    setSearchParams(newParams);
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <input name="query"></input>
        <button type="submit">Sumbit</button>
      </form>
      {status === Status.LOADING && <div>LOADING</div>}
      {status === Status.SUCCESS && (
        <ul className={css.searchList}>
          {films.map(({ title, id }) => (
            <li key={id} className={css.searchListItem}>
              <Link
                to={`${id}`}
                state={{ from: location }}
                className={css.searchListItemLink}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === Status.ERROR && <p>{error}</p>}
    </>
  );
}
