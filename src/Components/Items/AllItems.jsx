import axios from 'axios';
import React, { useEffect } from 'react';

const AllItems = () => {
  useEffect(() => {
    axios
      .get('https://localhost:7172/api/Items/0,10', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        responseType: 'json',
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <div>
      <h1>AllItems</h1>
    </div>
  );
};

export default AllItems;
