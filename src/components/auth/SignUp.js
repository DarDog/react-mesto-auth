import React from 'react'
import {Link} from 'react-router-dom'
import SignPage from "./SignPage";

function SignUp() {
  return (
      <article className='auth'>
        <SignPage context={{title: 'Регистрация', buttonName: 'Зарегистрироваться', formName: 'sign-up'}} />
        <Link to='/sign-in' className='auth__link'>Уже зарегистрированы? Войти</Link>
      </article>
  );
}

export default SignUp