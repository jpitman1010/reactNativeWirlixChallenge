import React from 'react';
import Form from '../forms/Form';
import { login } from '../api/authentication';
// import { setToken } from '../api/token';

const LoginScreen = ({ navigation }) => {
  const handleResult = async (result) => {
    if (result.ok && result.data) {
      await setToken(result.data.auth_token);
      navigation.navigate('Home');
    } else if (result.status === 401) {
      throw new Error('Invalid login.');
    } else {
      throw new Error('Something went wrong.');
    }
  };

  return (
    <Form
      action={login}
      afterSubmit={handleResult}
      buttonText="Submit"
      fields={{
        email: {
          label: 'Email',
          inputProps: {
            keyboardType: 'email-address',
          },
        },
        password: {
          label: 'Password',
          inputProps: {
            secureTextEntry: true,
          },
        },
      }}
    />
  );
};

export default LoginScreen;



//display error if login info isn't correct:
const Form = ({ fields, buttonText, action, afterSubmit }) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
    const [errorMessage, setErrorMessage] = useState('');
  
    // rest of code
  
    const submit = async () => {
      const values = getValues();
      try {
        const result = await action(...values);
        await afterSubmit(result);
      } catch (e) {
        setErrorMessage(e.message);
      }
    };
  
    return (
      <View>
        <Text>{errorMessage}</Text>
        // rest of code
      </View>
    );
  };