import { NavLink, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css';
import styled from 'styled-components';

export default function AdditionalInfo() {
  const StyledLink = styled(NavLink)`
    font-size: 18px;

    &.active {
      color: pink;
    }
  `;

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
