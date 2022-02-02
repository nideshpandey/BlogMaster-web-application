const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const multer = require("multer");


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
    .then(console.log('Database Connected !'))
    .catch((err) => console.log(err));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "blog.jpeg");
    },
});

const upload = multer({ storage: storage });
app.post("/server/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use("/server/auth", authRoute);
app.use("/server/post", postRoute);
app.use("/server/category", categoryRoute);



app.listen('3000', () => {
    console.log('Backend is running !');
});





