const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars').engine;
var morgan = require('morgan');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
          app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'))

// router

route(app);

                      app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
