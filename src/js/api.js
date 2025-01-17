const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/data', (req, res) => {
    // Handle GET request, return data as JSON
    const data = { message: 'Data from the API' };
    res.json(data);
});

app.post('/api/data', (req, res) => {
    // Handle POST request, process incoming data
    const receivedData = req.body;
    // Perform actions with receivedData
    res.json({ message: 'Data received and processed' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
