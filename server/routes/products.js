const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const prodLocation = path.join(path.dirname(__dirname),'/db', 'products.json');
const getProducts = () => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(prodLocation, (error, result)=> {
            if(error) {reject(error);}
            else {resolve(JSON.parse(result));}
            }
        )}
    );
}
router.get('/', async(req,res) => {
    try {
        res.send(Object.values(await getProducts()));
        console.log(path.dirname(__dirname));
    } catch(error) {
        return res.status(404).send(error);
    }
    
});

router.get('/:id', async(req, res) => {
    const product = Object.values(await getProducts()).find(c => c.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    res.send(product);
  });
  module.exports = router;
