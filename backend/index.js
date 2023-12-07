const express = require('express');
const app = express();


app.get('/test', (req, res) => {
    res.status(200).json({message: "Test!"})
})

app.listen(3001, () => {
    console.log('Server listen on 3001');
})