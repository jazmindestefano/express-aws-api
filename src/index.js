import express from 'express';
import AWS from 'aws-sdk';

const app = express();
const lambda = new AWS.Lambda({ region: 'us-east-1' });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/invoke-lambda', (req, res) => {
    const params = {
        FunctionName: 'express-api',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify({})
    };

    lambda.invoke(params, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data.Payload);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});