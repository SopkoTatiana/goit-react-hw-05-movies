import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import filmsAPI from 'services/FilmsAPI';
import MainInfo from 'components/MainInfo/MainInfo';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import styled from 'styled-components';
import { Status } from '../services/pageStatus';

const BackButton = styled(Link)`
  text-decoration: none;
  display: block;
  width: fit-content;
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: black;

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

export default function MovieDetails() {
  const [status, setStatus] = useState(Status.LOADING);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    filmsAPI({ option: 'details', movieId })
      .then(res => {
        if (res.success === false) {
          throw new Error();
        }
        setMovie(res);
        setStatus(Status.SUCCESS);
      })
      .catch(error => setStatus(Status.ERROR));
  }, [movieId]);

  return (
    <>
      {status === Status.LOADING && <p>LOADING...</p>}
      {status === Status.ERROR && <Navigate to="/NotFound" />}
      {status === Status.SUCCESS && (
        <>
          <BackButton to={backLink.current}>Back</BackButton>
          <MainInfo movie={movie} />
          <AdditionalInfo />
        </>
      )}
    </>
  );
}
