const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/jdang384', (req, res) => {
    res.send('you might want to check under your bed before you go to sleep tonight')
})

app.get('/alopez647', (req, res) => {
    res.send('you might want to check under your bed before you go to sleep tonight')
})

app.listen(port, () => {
    console.log(`server is listening on port${port}`)
});