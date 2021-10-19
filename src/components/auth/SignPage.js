import React from 'react';

function SignPage({context, ...props}) {
  return (
      <>
        <h1 className='auth__title'>{context.title}</h1>
        <form className='auth__form' name={context.formName}>
          <input className='form__input form__input_type_auth' minLength='2' placeholder='Email' type="email" required/>
          <input className='form__input form__input_type_auth' minLength='2' placeholder='Пароль' type="password"
                 required/>
          <button className='form__submit-button form__submit-button_type_auth' type='submit'>{context.buttonName}</button>
        </form>
      </>
  );
}

export default SignPage