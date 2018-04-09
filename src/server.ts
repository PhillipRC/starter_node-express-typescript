import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.json({
        message: 'Howdy World!'
    })
});

app.listen(8081);