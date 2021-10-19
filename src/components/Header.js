import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Header(props) {
  return (
      <header className="header page__header">
        <Link to="http://localhost:3000/" target="_self" className="logo header__logo"/>
        <ul className='nav'>
          <li className={`nav__item ${props.loggedIn && 'nav__item_hidden'}`}><NavLink to='/sign-in' className={'nav__link'} activeClassName='nav__link_hidden'>Войти</NavLink></li>
          <li className={`nav__item ${props.loggedIn && 'nav__item_hidden'}`}><NavLink to='/sign-up' className={'nav__link'} activeClassName='nav__link_hidden'>Регистрация</NavLink></li>
          <li className={`nav__item ${!props.loggedIn && 'nav__item_hidden'}`}><p className='nav__paragraph'>{props.userData.email}</p></li>
          <li className={`nav__item ${!props.loggedIn && 'nav__item_hidden'}`}><button className='nav__-link nav__button' type='button'>Выход</button></li>
        </ul>
      </header>
  );
}

export default Header