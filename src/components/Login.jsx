import React, { useState, useEffect } from 'react';
import Restaurants from './Restaurants';
import LoginForm from './LoginForm';

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
  const [authenticate, setAuthenticate] = useState(false);
  const [values, setValues] = useState([]);
  const [data, setData] = useState([]);
  const APIURL = process.env.API_URL;

  useEffect(() => {
    fetch(APIURL)
      .then((response) => response.json())
      .then((info) => {
        setData(info.response);
      })
      .catch((error) => console.log('error', error));
  }, []);

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
