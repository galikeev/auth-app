const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./server/routes/auth.routes');
const app = express();
const PORT = process.env.PORT || config.get('serverPort');
const URL = process.env.dbUrl || config.get('dbUrl');
const corsMiddleware = require('./server/middleware/cors.middleware');
const path = require('path');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

// Enable push-state routing (e.g. with React Router's BrowserRouter)
app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api/auth')) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

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