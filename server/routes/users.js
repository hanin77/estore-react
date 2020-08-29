const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const prodLocation = path.join(path.dirname(__dirname),'/db', 'products.json');
const cartsLocation = path.join(path.dirname(__dirname),'/db', 'carts.json');
const usersLocation = path.join(path.dirname(__dirname),'/db', 'users.json');
const getProducts = () => JSON.parse(fs.readFileSync(prodLocation));
const getCarts = () => JSON.parse(fs.readFileSync(cartsLocation));
const getUsers = () => JSON.parse(fs.readFileSync(usersLocation));
router.get('/cart/:id', (req,res) => {
    const cart = Object.values(getCarts()).find(c => c.id === parseInt(req.params.id));
    const cartItems = cart.products.map((item)=> {
      return {...Object.values(getProducts()).find(product => product.id === item.id), ...item}
  
    });
    if (!cart) return res.status(404).send('The cart with the given ID was not found.');
    res.send(cartItems);
  });
  
  router.get('/', (req,res) => {
  
    const user =  Object.values(getUsers()).find(c => c.email === req.query.email && c.password === req.query.password);
    console.log(user);
    if (!user) return res.status(404).send('The user with the given email & password was not found.');
    res.send(user);
  });

  module.exports = router;
  