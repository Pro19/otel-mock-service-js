const SwaggerExpress = require('swagger-express-mw');
const swaggerNodeRunner = require('swagger-node-runner');
const _ = require('lodash');

const initSwagger = function(webApiUrl, rootApp, app, express) {
    return new Promise((resolve, reject) => {

        const swaggerConfig = {
            webApiBaseUrl: webApiUrl,
            appRoot: rootApp, // required config
            anonymousRoutes: [ // THIS IS REQUIRED CONFIG, EVEN IF EMPTY [] 
            ]
        };

        SwaggerExpress.create(swaggerConfig, (err, swaggerExpress) => {
            if(err){
                reject(err);
            }
        
            try {
                const swaggerDefaultMiddlewares = swaggerExpress.stack();

                const swaggerUiEndpoint = swaggerExpress.config.swagger.docEndpoints.ui || 'docs';
                app.use(swaggerUiEndpoint, express.static('./public/'));
        
                app.use(swaggerDefaultMiddlewares);
        
                app.set('productPath', swaggerExpress.runner.swagger.basePath);
               
                app.get('/',(req,res)=>{
                    res.redirect(swaggerExpress.runner.config.swagger.docEndpoints.ui);
                });
                resolve(true);
            } catch(error) {
                reject(error);
            }
        });
    });
};

module.exports = {
    initSwagger
};