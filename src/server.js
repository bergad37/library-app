import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import allRoutes from "./routes//AllRoutes.js"


const app = express();

//Use cors and bodyparser

app.use(cors());
app.use(express.json());

//ROUTES 
app.use("/api/v1", allRoutes);
//Insertin g the data in the ta1ble



app.listen(5000, () => {
    console.log("The server listening at port 5000")
});