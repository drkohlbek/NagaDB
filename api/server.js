require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const vetRoutes = require("./routes/vets");
const gravesiteRoutes = require("./routes/gravesiteRoutes")
const cors = require('cors');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {

  next();
});

// routes
app.use("/api/vets", vetRoutes);

app.use("/api/gravesites", gravesiteRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("server running");
    });
  })
  .catch((error) => {
    console.log(error);
  });

