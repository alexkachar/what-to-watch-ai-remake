import * as React from 'react';

import Logo from '../partials/logo/logo';
import UserBlock from '../partials/user-block/user-block';

interface Props {
  isFavoritesHeader: boolean;
}

const Header = (props: Props) => {
  const {isFavoritesHeader} = props;

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className={`page-header ${isFavoritesHeader ? `user-page__head` : `movie-card__head`}`}>
        <Logo />

        {isFavoritesHeader && <h1 className="page-title user-page__title">My list</h1>}

        <UserBlock />

      </header>
    </>
  );
};

export default Header;
