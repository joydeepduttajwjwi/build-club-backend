const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Root API endpoint
app.get('/', (req, res) => {
    const dbFilePath = path.join(__dirname, 'db.json');
    if (fs.existsSync(dbFilePath)) {
        res.status(200).send('Status OK');
    } else {
        res.status(500).send({ error: 'db.json file is missing' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
