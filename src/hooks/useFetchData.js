import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data.response))
    .catch((error) => console.log('error', error));
  }, []);
  return data;

};

export default useFetchData;
