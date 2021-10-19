import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
      <header className="header page__header">
        <a href="http://localhost:3000/" target="_self" className="logo header__logo"> </a>
        <NavLink to='/sign-in' className={'header__nav-link'} activeClassName='header__nav-link_hidden' >Войти</NavLink>
        <NavLink to='/sign-up' className={'header__nav-link'} activeClassName='header__nav-link_hidden' >Регистрация</NavLink>
      </header>
  );
}

export default Header