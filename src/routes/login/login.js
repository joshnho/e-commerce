import { useState } from 'react';

import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';

import './login.scss';

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleClick = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className="login-container">
      {hasAccount ? (
        <SignUpForm switchForm={handleClick} />
      ) : (
        <SignInForm switchForm={handleClick} />
      )}
    </div>
  );
};

export default Login;
