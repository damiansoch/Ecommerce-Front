import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Item = ({ item }) => {
  const [imagePath, setImagePath] = useState('');

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
      <Card style={{ width: '256px' }}>
        <Card.Img
          height={'150px'}
          src={imagePath}
          alt="img"
          style={{ heigth: '150px' }}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>€{item.itemPrice}</ListGroup.Item>
          <ListGroup.Item>{item.dateAdded}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
