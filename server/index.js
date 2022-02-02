const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('Database Connected !'))
    .catch((err) => console.log(err));

    
app.use("/server/auth", authRoute);
app.use("/server/post", postRoute);



app.listen('3000', () => {
    console.log('Backend is running !');
});





