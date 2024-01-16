const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    //res.send('Welcome to Server');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/getstatusvalues', (req, res)=>{
 
})

const server = app.listen(8081, (req, res)=>{
    console.log('Server listening on port 8081.');
});