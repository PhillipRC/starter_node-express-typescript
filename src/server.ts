import express from 'express'

const app = express()

app.get('/', function (req, res) {
    res.json({
        message: 'Howdy World!'
    })
});

console.log('listening to 8081')
app.listen(8081)