import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import styled from 'styled-components';

export default function SharedLayout(params) {
  const StyledLink = styled(NavLink)`
    font-size: 20px;

    &.active {
      color: pink;
    }
  `;

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.navigationList}>
            <li>
              <StyledLink className={css.navigationListItem} to="/">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<p>...LOADING...</p>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
