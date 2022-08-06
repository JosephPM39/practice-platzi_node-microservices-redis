const express = require('express');
const config = require('../config.js');
const user = require('./components/user/network');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('./swagger.json');

const app = express();

app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api.port, () => {
	console.log('Api escuchando en el puerto ', config.api.port);
});
