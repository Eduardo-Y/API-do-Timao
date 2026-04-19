import express, { json } from "express";
import all_players from "./data.js";

const app = express();

app.use(json());

app.get("/", (req, res) => {
    res.status(200).send(all_players);
});

const port = 3000;
app.listen(port, () => console.log("API rodando ..."));
