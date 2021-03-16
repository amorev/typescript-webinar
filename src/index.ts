import { UserController } from './api/controllers/UserController';
import * as bodyParser from 'body-parser';

const express = require('express');
const app = express();
const port = 3000;

// CRUD users
app.use(bodyParser.json())
console.log('before create');
app.use('/users', (new UserController()).router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
