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
app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const clientId = 'Iv23ctByhcAhqXrMIydW';
    const clientSecret = '5d34031599131cec39e80e15dc89213487189481';

    if (!code) {
        return res.status(400).send('Code not provided');
    }

    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        }, {
            headers: {
                accept: 'application/json'
            }
        });

        const accessToken = response.data.access_token;
        if (!accessToken) {
            return res.status(400).send('Access token not provided');
        }

        // You can now use the access token to make authenticated requests to the GitHub API
        res.json({ access_token: accessToken });
    } catch (error) {
        res.status(500).send('Error exchanging code for access token');
    }
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
