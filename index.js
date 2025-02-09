// index.js

const express = require('express');
const cors = require('cors');
const classifyNumRoute = require('./src/route/classifyNumberRoutes');

const app = express();
const PORT = 3000;

app.use(cors({
	origin: "*"
}));
app.use(express.json());

app.use('/', classifyNumRoute);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});
