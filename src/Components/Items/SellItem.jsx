import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SellItem = () => {
  //item interface
  const [addItemRequest, setAddItemRequest] = useState({
    name: '',
    description: '',
    itemPrice: '',
    categoryId: '',
    conditionId: '',
    userId: '091dbc20-4557-406e-bbff-357de3099882',
  });

  //--------------
  //change haldler
  const changeHandler = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setAddItemRequest({
      ...addItemRequest,
      [name]: value,
    });
  };
  //---------------
  //getting values for condition dropdown
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7172/api/Condition', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        responseType: 'json',
      })
      .then(function (response) {
        setConditions(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  //-------------------------------------

  //getting values for categories dropdown
  const [categorries, setCategorries] = useState([]);

  useEffect(() => {
    axios
      .get('https://localhost:7172/api/Category', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        responseType: 'json',
      })
      .then(function (response) {
        setCategorries(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  //-------------------------------------

  //form Submit handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('https://localhost:7172/api/Items', addItemRequest, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        responseType: 'json',
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  //-------------------
  return (
    <div>
      <Container>
        <h2 className="text-center my-5">Sell item</h2>
        <Form
          className="col-12 col-sm-8 col-md-6 mx-auto my-5"
          onSubmit={formSubmitHandler}
        >
          {/* name */}
          <Form.Group className="mb-3" controlId="formBasicItemName">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              name="name"
              value={addItemRequest.name}
              onChange={(evt) => {
                changeHandler(evt);
              }}
              type="text"
              placeholder="Whats the item?"
              required
              minLength={3}
            />
          </Form.Group>

          {/* description */}
          <Form.Group className="mb-3" controlId="formBasicItemDescription">
            <Form.Label>Item description</Form.Label>
            <Form.Control
              name="description"
              value={addItemRequest.description}
              onChange={(evt) => {
                changeHandler(evt);
              }}
              as="textarea"
              type="text"
              placeholder="Description"
              required
              minLength={10}
            />
          </Form.Group>

          {/* price */}
          <Form.Group className="mb-3" controlId="formBasicItemPrice">
            <Form.Label>Item Price</Form.Label>
            <Form.Control
              name="itemPrice"
              value={addItemRequest.itemPrice}
              onChange={(evt) => {
                changeHandler(evt);
              }}
              type="number"
              min={0}
              step="0.01"
              placeholder="Price"
              required
            />
          </Form.Group>

          {/* category */}
          <Form.Group className="mb-3" controlId="formBasicItemCategory">
            <Form.Label>Select category</Form.Label>
            <Form.Select
              name="categoryId"
              value={addItemRequest.categoryId}
              onChange={(evt) => {
                changeHandler(evt);
              }}
              required
            >
              <option disabled value="">
                --------
              </option>
              {categorries.map((category, index) => (
                <option value={category.id} key={index}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* condition */}
          <Form.Group className="mb-3" controlId="formBasicItemCondition">
            <Form.Label>Select condition</Form.Label>
            <Form.Select
              name="conditionId"
              value={addItemRequest.conditionId}
              onChange={(evt) => {
                changeHandler(evt);
              }}
              required
            >
              <option disabled value="">
                --------
              </option>
              {conditions.map((condition, index) => (
                <option value={condition.id} key={index}>
                  {condition.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <p className="text-info text-center">
            To add item pictures, go to "item details" after adding the item.
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SellItem;
