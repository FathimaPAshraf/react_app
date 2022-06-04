const express = require("express")
const app = express();

const mongoose = require("mongoose")
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Fathimaashraf:fathy9656@cluster0.go7lq.mongodb.net/intot")

app.use("/",require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log('express server is running on port 3001');
});