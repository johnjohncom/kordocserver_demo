const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 59876;

// Use morgan to log requests to the console
app.use(morgan('combined'));

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// GitHub app callback endpoint
app.get('/callback', (req, res) => {
    const code = req.query.code;
    
    if (!code) {
        return res.status(400).send('Code not provided');
    }
    
    // 단순히 코드 값을 확인하고 성공 메시지 반환
    res.send(`성공적으로 인증되었습니다. 코드: ${code}`);
});

// POST endpoint to get the payload to the GitHub Copilot skillset
//accept application/json MIME type
// response back with the string of information that 06.CoplotStandalone.md has
app.post('/copilotstandalone', async (req, res) => {

    const sendFile = () => {
        fs.readFile('./CopilotDoc/06.CopilotStandalone.md', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error reading file' });
            }
            res.json({ content: data });
        });
    };

    try {
        sendFile();
    } catch (error) {
        console.error(error.stack);
        return res.status(400).send(error.message);
    }

});

app.post('/copilotfeatures', async (req, res) => {

    const sendFile = () => {
        fs.readFile('./CopilotDoc/01.Copilot-features.md', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error reading file' });
            }
            res.json({ content: data });
        });
    };

    try {
        sendFile();
    } catch (error) {
        console.error(error.stack);
        return res.status(400).send(error.message);
    }

});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});
