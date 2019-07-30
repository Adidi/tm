const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const port = process.env.PORT || 9999;
app.listen(port, () => {
    console.log(`Server started http://localhost:${port}/`);
});