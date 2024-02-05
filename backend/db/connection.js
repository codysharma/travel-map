const mongoose = require('mongoose')
require('dotenv').config();

connectionString = process.env.MONGO_URL

// const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9rlnxnp.mongodb.net/travel-map?retryWrites=true&w=majority`

const port = process.env.port || 8000;

mongoose.connect(connectionString, {
})

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB database`);
})

mongoose.connection.on('disconnected', () => {
  console.log(`Disconnected`);
})

mongoose.connection.on('error', (error) => {
  console.log(`Error connecting`);
  console.error(error);
})

module.exports = {connectionString, port};