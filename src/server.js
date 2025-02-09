// src/server.js

const express = require("express");
const cors = require("cors");
const { classifyNumber } = require("./classify");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const result = await classifyNumber(num);
    res.json(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
