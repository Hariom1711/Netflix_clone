

// mongoose.connect('mongodb+srv://Hariom1711:Hariomojha1711@cluster0.vwtmxqg.mongodb.net/netflix-clone',{
//
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://Hariom1711:Hariomojha1711@cluster0.vwtmxqg.mongodb.net/netflix-clone',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
const port =process.env.port ||5000
app.listen(port, () => {
  console.log("server started on port 5000");
});
