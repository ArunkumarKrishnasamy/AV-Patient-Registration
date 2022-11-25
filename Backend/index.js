const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001 || process.env.PORT;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const URL = "mongodb://localhost:27017";

app.post("/patient", async (req, res) => {
  try {
    // open the connection
    let connection = await mongoClient.connect(URL);
    // choose the db
    let db = connection.db("Users");
    // choose the collection
    let patient = await db
      .collection("Registered Patients")
      .insertOne(req.body);
    // close the connection
    connection.close();
    res.json(patient);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in posting data",
    });
  }
});

app.get("/patient", async (req, res) => {
  try {
    let connection = await mongoClient.connect(URL);
    let db = connection.db("Users");
    let patients = await db.collection("Registered Patients").find().toArray();
    await connection.close();
    res.json(patients);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error in getting data",
    });
  }
});

app.listen(PORT, () => {
  console.log("Web Server started");
});
