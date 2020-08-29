const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const prodLocation = path.join(path.dirname(__dirname),'/db', 'products.json');
const getProducts = () => JSON.parse(fs.readFileSync(prodLocation))
router.get('/', (req,res) => {
    res.send(Object.values(getProducts()));
    console.log(path.dirname(__dirname));

    console.log('product length is: ');
});

router.get('/:id', (req, res) => {
    const product = Object.values(getProducts()).find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    res.send(product);
  });
  module.exports = router;
