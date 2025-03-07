import express from 'express';
import axios from 'axios';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));

// Variables de entorno
const lambdaUrl = "https://mmk4ay6qawdjcazelchctit5lm0jrwah.lambda-url.us-east-1.on.aws/";
const port = 3000;

// Rutas
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/invoke-lambda', async (req, res) => {
    try {
        const payload = {};

        const response = await axios.post(lambdaUrl, payload, {
            timeout: 5000,
        });

        res.send(response.data);
    } catch (err) {
        console.error("Error invoking Lambda:", err);

        if (err.response) {
            res.status(err.response.status).send(err.response.data);
        } else if (err.request) {
            res.status(500).send('No response from Lambda');
        } else {
            res.status(500).send('Error setting up request to Lambda');
        }
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});