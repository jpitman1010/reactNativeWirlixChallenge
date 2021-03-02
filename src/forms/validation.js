import React from 'react';
import Form from '../forms/Form';
import { login } from '../api/authentication';
import { setToken } from '../api/token';
// import { validateContent, validateLength } from '../forms/validation';

const LoginScreen = ({ navigation }) => {
  // Old code

  return (
    <Form
      action={login}
      afterSubmit={handleResult}
      buttonText="Submit"
      fields={{
        email: {
          label: 'Email',
          validators: [validateContent],
          inputProps: {
            keyboardType: 'email-address',
          },
        },
        password: {
          label: 'Password',
          validators: [validateContent, validateLength],
          inputProps: {
            secureTextEntry: true,
          },
        },
      }}
    />
  );
};

export default LoginScreen;



export const validateContent = (text) => {
    if (!text) {
      return "Can't be blank";
    }
  };
  
  export const validateLength = (text) => {
    if (text && text.length < 4) {
      return 'Must be 4 characters or more.';
    }
  };