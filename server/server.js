const path = require('path');
const productsApi = require('./routes/products');
const usersApi = require('./routes/users'); 
const express = require('express');
const { json } = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');
app.use(express.static(publicPath));
app.use(json());
app.use('/api/products', productsApi);
app.use('/api/users', usersApi);

if(process.env.NODE_ENV==='developement'){
  const morgan = require('morgan');
  const config = require("config");
  const srvrDebug = require("debug")('serv:start');
  const dbDebug = require("debug")('serv:db');
  app.use(morgan('combined'));
  srvrDebug('morgan is enabled');
}

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log('server is runing on port', port);
    console.log('you are in mode: ', process.env.NODE_ENV);
});

//const saveContacts = (contacts) => fs.writeFileSync(contactsLocation, JSON.stringify(contacts, null, 2))
