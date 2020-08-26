const express = require('express');
const {products, carts, users} = require('../data');
const router = express.Router();

router.get('/cart/:id', (req,res) => {
    const cart = carts.find(c => c.id === parseInt(req.params.id));
    const cartItems = cart.products.map((item)=> {
      return {...products.find(product => product.id === item.id), ...item}
  
    });
    if (!cart) return res.status(404).send('The cart with the given ID was not found.');
      res.send(cartItems);
  });
  
  router.get('/', (req,res) => {
  
    const user = users.find(c => c.email === req.query.email && c.password === req.query.password);
    console.log(user);
    if (!user) return res.status(404).send('The user with the given email & password was not found.');
    res.send(user);
  });

  module.exports = router;
  