import express from 'express';
import awsServerlessExpress from 'aws-serverless-express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Crea un servidor Express para Lambda
const server = awsServerlessExpress.createServer(app);

// Exporta la función Lambda
export const handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context); 
};