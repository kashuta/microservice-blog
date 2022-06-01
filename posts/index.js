require('dotenv').config();
const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser')

const PORT = process.env.PORT ?? 4010;
const app = express();
const posts = {};

app.use(bodyParser.json());

//router for posts
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title, body} = req.body;
    posts[id] = {
        id,
        title,
        body,
    };
    res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

