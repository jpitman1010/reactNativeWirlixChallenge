import React from 'react';
import { Text, TextInput, View} from 'react-native';
// import { login } from '../api/authentication';






  //This is a nice clean, asynchronous method to now invoke from 
  // get and post methods:
  
  // const formatResult = async (result) => {
  //   const formatted = {
  //     status: result.status,
  //     ok: result.ok,
  //   };
  
  //   if (result.ok) {
  //     formatted.data = await result.json();
  //   }
  
  //   return formatted;
  // };
  

  //Is this essential? No. Will it make our lives easier down the line? Yes. :
  
  // export const post = async (destination, body) => {
  //   const headers = await getHeaders();
  
  //   const result = await fetch(`${API_URL}${destination}`, {
  //     method: 'POST',
  //     headers,
  //     body: JSON.stringify(body),
  //   });
  
  //   const formattedResult = await formatResult(result);
  //   return formattedResult;
  // };
  
  


  // // creating the account


  // const CreateAccount = ({ navigation }) => {
  //   return <Form />;
  // };
  
  // export default CreateAccount;



//Login screen 



const LoginScreen = ({ navigation }) => {
    return (
      <Form
        action={login}
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



//making form work:

const Form = ({ fields }) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialState(fieldKeys));
  
    const onChangeValue = (key, value) => {
      const newState = { ...values, [key]: value };
      setValues(newState);
    };
  
    return fieldKeys.map((key) => {
      const field = fields[key];
      return (
        <View key={key}>
          <Text>{field.label}</Text>
          <TextInput
            {...field.inputProps}
            value={values[key]}
            onChangeText={(text) => onChangeValue(key, text)}
          />
        </View>
      );
    });
  };
  
  export default Form;
  
  
  //^^Use a getInitialState function to construct an object with an empty string assigned to each field key.
  //^^ Then pass a value and onChangeText prop to TextInput, which calls a method that updates the entire state object.
  

  
  // Using hooks to dynamically create a values object and store in the state of the Form:
  

  const getInitialState = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
      state[key] = '';
    });
  
    return state;
  };
  


