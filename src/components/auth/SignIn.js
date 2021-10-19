import React from 'react'

function SignIn() {
  return (
    <article className='auth'>
      <h1 className='auth__title'>Вход</h1>
      <form className='auth__form' name='sign-in'>
        <input className='form__input form__input_type_auth' minLength='2' placeholder='Email' type="email" required/>
        <input className='form__input form__input_type_auth' minLength='2' placeholder='Пароль' type="password" required/>
        <button className='form__submit-button form__submit-button_type_auth' type='submit'>Войти</button>
      </form>
    </article>
  );
}

export default SignIn