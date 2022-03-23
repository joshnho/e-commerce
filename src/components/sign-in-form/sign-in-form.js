import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-in-form.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = ({ switchForm }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect email and/or password');
          break;
        case 'auth/user-not-found':
          alert('Email not found');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Don't have an account?</h2>
      <span className="form-switch-link" onClick={switchForm}>
        Register here
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required={true}
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          required={true}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
