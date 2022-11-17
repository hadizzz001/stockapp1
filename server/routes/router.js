const express = require('express');
const route = express.Router() 

const services = require('../services/render');
const controller = require('../controller/controller');
const controller2 = require('../controller/controller2'); 
const controller4 = require('../controller/controller4'); 
const controller5 = require('../controller/controller5'); 
const controller6 = require('../controller/controller6'); 






/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes)

/**
 * @description add item
 * @method GET/add_item
 */
 route.get('/add_item',services.add_item)


/**
 * @description update item
 * @method GET/update_item
 */
 route.get('/update_item',services.update_item)

 //API
 route.post('/api/items',controller2.create);
 route.get('/api/items',controller2.find);
 route.get('/api/items/:id',controller2.find1);
 route.put('/api/items/:id',controller2.update); 
 route.delete('/api/items/:id',controller2.delete);
 







 /**
 * @description Root Route2
 * @method GET/
 */
route.get('/order',services.homeRoutes2)

/**
 * @description add user
 * @method GET/add_user
 */
 route.get('/add_user',services.add_user)


/**
 * @description update user
 * @method GET/update_user
 */
 route.get('/update_user',services.update_user1)
 

 //API
 route.post('/api/users',controller.create);
 route.get('/api/users',controller.find);
 route.put('/api/users/:id',controller.update); 
 route.delete('/api/users/:id',controller.delete);
 





 /**
 * @description Root Route4
 * @method GET/
 */
  route.get('/upload2',services.homeRoutes4) 

//  API
route.get('/api/upload2', controller4.find); 
 






/**
 * @description add url
 * @method GET/add_url
 */
 route.get('/add_url',services.add_url) 

 //API
 route.post('/api/urls',controller5.create);
 route.get('/api/urls',controller5.find);


 /**
 * @description add url1
 * @method GET/add_url1
 */
  route.get('/add_url1',services.add_url1);
 

 

module.exports=route
















 

