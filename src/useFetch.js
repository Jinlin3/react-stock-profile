import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const fullURL = url + process.env.REACT_APP_POLYGON_KEY;
  console.log('Full URL is: ' + fullURL);

  useEffect(() => {
    fetch(fullURL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }, [fullURL]);
  console.log(data);
  return data;
}

export default useFetch;