const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('API is working!')
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})