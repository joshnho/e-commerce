import { useState } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

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
