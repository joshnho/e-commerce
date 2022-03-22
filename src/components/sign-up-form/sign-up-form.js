import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already taken');
      } else {
        console.log('user create error', error);
      }
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            required: true,
            name: 'displayName',
            type: 'text',
            value: displayName,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            name: 'email',
            type: 'email',
            value: email,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            required: true,
            name: 'password',
            type: 'password',
            value: password,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            required: true,
            name: 'confirmPassword',
            type: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
          }}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
