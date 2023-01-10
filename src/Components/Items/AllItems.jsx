import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Item from './Item';

const AllItems = () => {
  const [allItems, setAllItems] = useState([]);
  console.log(allItems);
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
        setAllItems(response.data);
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
    <Container>
      <div className="allItemsDiv">
        {allItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllItems;
