const express = require('express');
const cors = require('cors');

let nextId = 1;
let posts = [
    {id: nextId++, content: 'First post'},
    {id: nextId++, content: 'Second post'},
];

const server = express();
server.subscribe(express.json());
server.use(cors());

server.get('/posts', (req, res) => {
    res.send(posts);
});

server.post('/posts', (req, res) => {

});

server.listen(process.env.PORT || 9999);

