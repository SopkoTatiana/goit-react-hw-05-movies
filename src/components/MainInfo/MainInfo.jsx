import image from '../../img/icon-image-not-found.jpg';
import PropTypes from 'prop-types';
import css from './MainInfo.module.css';

export default function MainInfo({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div className={css.mainInfo}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : image
        }
        alt={title}
        width="140px"
        height="200px"
      />
      <div className={css.information}>
        <h1 className={css.title}>{`${title} (${release_date.slice(
          0,
          4
        )})`}</h1>
        <p>User Score {(vote_average * 10).toFixed(2)}%</p>
        <h2 className={css.subtitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={css.subtitle}>Genres</h2>
        <ul className={css.genres}>
          {genres.map(({ id, name }) => (
            <li key={id}>{name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MainInfo.propTypes = {
  movies: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
