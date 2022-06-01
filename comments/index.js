require('dotenv').config();
const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser')

const PORT = process.env.PORT ?? 4010;
const app = express();
const comment = {};

app.use(bodyParser.json());

//router for posts
app.get('/comments', (req, res) => {
    res.send(comment);
});

app.post('/comments', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { body} = req.body;
    posts[id] = {
        id,
        body,
    };
    res.status(201).send(comment[id]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

