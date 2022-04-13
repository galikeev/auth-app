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

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('../client/build'));

    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const start = async () => {
    try {
        mongoose.connect(URL); 

        app.listen(PORT, "0.0.0.0", () => {
            console.log('server started on port', PORT);
        });
    } catch(e) {

    }
}

start();