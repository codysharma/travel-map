const express = require("express")
const mongoose = require("mongoose")
const app = express()
const {connectionString, port} = require("./db/connection");

// Middleware - before routs
app.use(express.json())

// Routes
const PinRoute = require("./routes/pins")
app.use("/api/pins", PinRoute)


app.use((req, res, next) => {
    console.log(`Received ${req.method} request at ${req.url}`);
    next();
});

const startServer = async () => {
    await mongoose.connect(connectionString);
    //After connecting to DB, turn on my server
    app.listen(port, () => console.log(`Backend running on port: ${port}`))
}

startServer()