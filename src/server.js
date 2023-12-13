import express from "express";
import configVienEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser';
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080

configVienEngine(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

initWebRoutes(app)

app.listen(PORT, () => {
    console.log("run in port: " + PORT);
})