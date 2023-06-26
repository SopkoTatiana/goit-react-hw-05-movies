import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import filmsAPI from 'services/FilmsAPI';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    filmsAPI({ option: 'reviews', movieId })
      .then(({ results }) => {
        if (results.length === 0) {
          throw new Error('There are no reviews');
        }
        setReviews(results);
      })
      .catch(({ message }) => setMessage(message));
  });

  return (
    <>
      <p>{message}</p>
      <ul className={css.reviewsList}>
        {reviews.map(({ id, content, author_details: { username } }) => (
          <li key={id} className={css.reviewsListItem}>
            <p className={css.author}>{username}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
