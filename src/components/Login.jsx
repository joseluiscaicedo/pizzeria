import React, { useState } from 'react';
import Restaurants from './Restaurants';
import LoginForm from './LoginForm';
import useFetchData from '../hooks/useFetchData';
const handleSubmit = ({ setAuthenticate, data, values }) => (event) => {
  event.preventDefault();
  data.users.forEach((element) => {
    if (element.email === values.email && element.password === values.password) {
      setAuthenticate(true);
    }
  });
};

const handleInput = ({ setValues, values }) => (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
};


const Login = () => {
  const APIURL = process.env.API_URL;
  const data = useFetchData(APIURL);

  const [authenticate, setAuthenticate] = useState(false);
  const [values, setValues] = useState([]);

  return (
    (!authenticate) ? (
      <LoginForm
        handleSubmit={handleSubmit({ setAuthenticate, data, values })}
        handleInput={handleInput({ setValues, values })}
      />
    ) :
      <Restaurants store={data.stores} />
  );

};

export default Login;
