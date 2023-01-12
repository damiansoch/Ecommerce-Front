import { useContext, useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

import ItemContext from '../../Context/ItemContext';

const Item = ({ item }) => {
  const { setItemId } = useContext(ItemContext);

  const [imagePath, setImagePath] = useState('');
  const dateFirstPosted = item.dateAdded.split('T')[0];

  useEffect(() => {
    if (item.image.length > 0) {
      setImagePath(
        `https://localhost:7172/Images/thumb/${item.image[0].imageURL}`
      );
    } else {
      setImagePath(
        'https://i0.wp.com/www.cssscript.com/wp-content/uploads/2016/09/progressive-image-loading-pure-css.jpg?fit=542%2C407&ssl=1'
      );
    }
  }, []);

  return (
    <div className="my-5 mx-2">
      <Card style={{ width: '200px' }}>
        <Card.Img variant="top" height={'150px'} src={imagePath} alt="img" />
        <Card.Body className="text-center">
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <small>€{item.itemPrice}</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <small>{dateFirstPosted}</small>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link
            className="text-black"
            to="/ItemDetails"
            onClick={() => {
              setItemId(item.id);

              localStorage.setItem('itemId', JSON.stringify(item.id));
            }}
          >
            Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
