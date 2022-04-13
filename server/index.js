const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const app = express();
const PORT = process.env.PORT || config.get('serverPort');
const URL = process.env.dbUrl || config.get('dbUrl');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
    try {
        mongoose.connect(URL); 

        app.listen(PORT, () => {
            console.log('server started on port', PORT);
        });
    } catch(e) {

    }
}

start();