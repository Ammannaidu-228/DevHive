const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({message:'Backed Server started!!! Ready with UI'})
});

app.listen(port, ()=> console.log(`server started at http://localhost:${port}`))