import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

import ItemContext from '../../Context/ItemContext';

const ItemDetails = () => {
  const { itemId, setItemId, item, setItem } = useContext(ItemContext);
  console.log(item);

  const [noPicturesMsg, setNoPichuresMsg] = useState('');

  const [imagePath, setImagePath] = useState('');
  const [imageNames, setImageNames] = useState([]);

  //getting item from API
  useEffect(() => {
    axios
      .get(`https://localhost:7172/api/Items/${itemId}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        responseType: 'json',
      })
      .then(function (response) {
        setItem(response.data);

        localStorage.setItem('item', JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {});
  }, [itemId]);
  //------------------------

  //function for getting the images
  useEffect(() => {
    getImages();
  }, [item]);

  const getImages = () => {
    if (item.image.length !== 0) {
      setImageNames([]);
      setImagePath('');
      item.image.forEach((image) => {
        setImageNames((oldNames) => [...oldNames, image.imageURL]);
      });
      setImagePath(`https://localhost:7172/Images/`);
      setNoPichuresMsg('');
    } else {
      setNoPichuresMsg('No images added');
      setImageNames([]);
      setImagePath('');
    }
  };
  //-------------------------------
  return (
    <Container>
      <div>
        <Card className="col-12 col-md-8 mx-auto my-5 ">
          <Card.Body>
            <Card.Text className="text-muted small">Item:</Card.Text>
            <Card.Title className=" ms-3">{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text className="text-muted  small mb-2 ">Price:</Card.Text>
              <h4 className="text-success ms-3">€{item.itemPrice}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="text-muted small mb-2">
                Description:
              </Card.Text>
              <p className="text-info ms-3">{item.description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="text-muted  small mb-3">
                Category:
              </Card.Text>
              <p className="text-info ms-3">{item.category.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="text-muted  small mb-3">
                Condition:
              </Card.Text>
              <p className="text-info ms-3">{item.condition.name}</p>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to="">
              <p className="text-center">Add Pictures</p>
            </Link>
          </Card.Body>
          <Card.Body>
            <Card.Text className="text-muted  small mb-2">Pictures</Card.Text>
            {imageNames.map((imageName, index) => (
              <Card.Img
                className="my-2"
                key={index}
                src={imagePath + imageName}
                alt="No images added"
              />
            ))}
            <p className="text-danger">{noPicturesMsg}</p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ItemDetails;
