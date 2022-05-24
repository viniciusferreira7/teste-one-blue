// import { useEffect, useState } from 'react';

// export const useFetch = (url, userName, userPassword) => {
//   const [result, setResult] = useState(null);
//   const [exists, setExists] = useState(false);

//   useEffect(() => {
//     const options = {
//       method: 'POST',
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//       body: JSON.stringify({ name: userName, password: userPassword }),
//     };

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const jsonResult = await response.json();

//         console.log(jsonResult);
//       } catch (e) {
//         throw Error('Erro');
//       }
//     };
//     if (userName != '' && userPassword != '') fetchData();

//     return () => setExists(false);
//   }, [url, userName, userPassword]);

//   return [result, exists];
// };
