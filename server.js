const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'esdeath',
    password: 'Lienhoax2',
    database: 'myDB'
});

app.post('/save', (req, res) => {
    const content = req.body.content;
    const query = 'INSERT INTO blog_posts (content) VALUES (?)';

    connection.query(query, [content], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({status: 'error'});
        } else {
            res.status(200).json({status: 'ok'});
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});