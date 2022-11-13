const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const app =express();
const fileUpload = require('express-fileupload')
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload({
    useTempFiles:true
}))

app.use("/api/cloudinary",require("./controller/cloudinary.controller"));

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})