import { NavLink, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: 18px;

  &.active {
    color: pink;
  }
`;

export default function AdditionalInfo() {
  return (
    <div className={css.additionalInfo}>
      <h2 className={css.subtitle}>Additional information</h2>
      <div className={css.container}>
        <StyledLink to={'cast'}>Cast</StyledLink>
        <StyledLink to={'reviews'}>Reviews</StyledLink>
      </div>
      <Outlet />
    </div>
  );
}
