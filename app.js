const express = require('express');

const app = express();
app.use(express.static('public'))

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`))