import { useState } from 'react';

import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';

import { LoginContainer } from './login.styles.js';

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleClick = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <LoginContainer>
      {hasAccount ? (
        <SignUpForm switchForm={handleClick} />
      ) : (
        <SignInForm switchForm={handleClick} />
      )}
    </LoginContainer>
  );
};

export default Login;
