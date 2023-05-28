import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
dotenv.config(); // don't for get this!!!!!!
const app = express();
const PORT = process.env.PORT || 8800;

// function to connect to the database 
const connectDB = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB is connected')
    } catch(error) {
        console.log(`Cant conntect to mongoDB database ${error}`)
    }

}

//call the function to connect to the database
// If we use MVC pattern we must put the connectDB() in the config folder
//and we will call connectDB() at the top of the server.js file 
//Top of all the routes and ohter config
connectDB();





app.listen(PORT, () => {
    console.log(`Backend Server is running at ${PORT}`)
})