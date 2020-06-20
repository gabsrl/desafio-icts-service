const { Router } = require('express');
const ProductController =  require('./Controllers/ProductController');

const routes = new Router();

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports =  routes;
