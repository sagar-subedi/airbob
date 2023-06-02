const express = require('express');
const app = express();

app.get('/test', (req, res)=> {
    res.json('test ok');
});

app.listen(4000, ()=>{
    console.log('The server is running usccessfully at port 4000');
})