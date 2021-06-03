'use strict';

const Application = require('./app');

const port = 1234;
const app = new Application();

try{
    app.initMiddlewares();
    app.run(port);
}
catch(error){
    console.log(error);
    process.exit();
}