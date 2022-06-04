require('dotenv').config();
const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser')

const PORT = process.env.PORT ?? 4010;
const app = express();
const commentsByPostId = {};

app.use(bodyParser.json());

//router for comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentId, content});
    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

