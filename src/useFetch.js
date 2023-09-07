import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fullURL = url + process.env.REACT_APP_POLYGON_KEY;

  useEffect(() => {
    fetch(fullURL)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data from the API!');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      })
  }, [fullURL]);
  console.log("useFetch");
  return { data, error };
}

export default useFetch;