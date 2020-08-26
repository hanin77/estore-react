const express = require('express');
const {products} = require('../data');
const router = express.Router();

router.get('/', (req,res) => {
    res.send(products);
    console.log('product length is: ',products.length);
});

router.get('/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    res.send(product);
  });
  module.exports = router;
