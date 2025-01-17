const express = require('express');
const app = express();
app.use(express.json());

function fun(str) {
    const obj = {};
    for (const char of str) {
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char]++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === 1) {
            return { char: str[i], index: i }; 
        }
    }
    return null;
}

app.post('/first-unique-character', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Invalid input" });
    }
console.log(`[${new Date().toISOString()}]  End point :${str}`);

    const result = fun(text);
    const timestamp = new Date().toISOString();

    if (result === null) {
        return res.json({
            first_unique_char: null,
            first_unique_char_index: -1,
            timestamp: timestamp
        });
    }

    res.json({
        first_unique_char: result.char,
        first_unique_char_index: result.index,
        timestamp: timestamp
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
