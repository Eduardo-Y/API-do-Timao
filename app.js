import express, { json } from "express";
import player from "./routes/playersRouter.js";

const app = express();

const baseRoute = "/api/v1";

app.use(json());
app.use(baseRoute + "/players", player);

const port = 3000;
app.listen(port, () => {
    console.log("API rodando ...");
});
