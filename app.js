const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello from server')
})
app.listen(3000, () => {
    console.log('server is running on port 3000')
})