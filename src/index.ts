import { UserController } from './api/controllers/UserController';
import { BooksController } from './api/controllers/BooksController';
import * as bodyParser from 'body-parser';
import { UserModel } from './api/models/user';

const express = require('express');
const app = express();
const port = 3000;

// CRUD users
app.use(bodyParser.json())
app.use('/users', (new UserController(new UserModel())).router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
