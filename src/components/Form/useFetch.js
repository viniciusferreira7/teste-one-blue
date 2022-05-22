import { useEffect, useState } from 'react';

export const useFetch = (url, userName, userPassword) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let wait = false;

    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name: userName, password: userPassword }),
    };

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();

        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          console.log(e);
          setLoading(false);
        }
      }
    };
    if (userName != '' && userPassword != '') fetchData();

    return () => {
      wait = true;
    };
  }, [url, userName, userPassword]);

  return [result, loading];
};
