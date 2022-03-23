import { useState } from 'react';

import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SignInForm from '../../Components/SignInForm/SignInForm';

import './auth.scss';

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleClick = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className="auth-container">
      {hasAccount ? (
        <SignUpForm switchForm={handleClick} />
      ) : (
        <SignInForm switchForm={handleClick} />
      )}
    </div>
  );
};

export default Auth;
