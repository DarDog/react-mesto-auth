import React from 'react'
import SignPage from "./SignPage";

function SignIn() {
  return (
    <article className='auth'>
      <SignPage context={{title: 'Вход', buttonName: 'Войти', formName: 'sign-in'}} />
    </article>
  );
}

export default SignIn