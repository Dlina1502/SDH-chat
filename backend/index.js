const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute")

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)

app.get("/api/resource", (req, res) => {
    // Implement logic to fetch resources from the database
    // and send the response
});

app.post("/api/resource", (req, res) => {
    // Implement logic to create a new resource in the database
    // based on the data in the request body
});

app.put("/api/resource/:id", (req, res) => {
    // Implement logic to update a resource in the database
    // based on the data in the request body and the provided ID
});

app.delete("/api/resource/:id", (req, res) => {
    // Implement logic to delete a resource from the database
    // based on the provided ID
});

const port = process.env.PORT || 5000;

const dbUri = process.env.ATLAS_URI;

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(err => console.log(err));
