const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//env setup
require("dotenv").config();

const app = express();
//const PORT = process.env.PORT;
const PORT = process.env.SERVER_PORT;

app.use(express.json());
// app.use(cors);
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import our API routes
const apiRouter = require("./APIRoutes");
app.use("/api", apiRouter);

// As our server to listen for incoming connections
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
