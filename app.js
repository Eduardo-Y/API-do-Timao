import express, { json } from "express";
import ALL_PLAYERS from "./data.js";
import { format_string } from "./utils.js";
import { randomUUID } from "node:crypto";

let all_players = ALL_PLAYERS;
const app = express();

app.use(json());

app.get("/", (req, res) => {
    res.status(200).send(all_players);
});

app.get("/player-by-name/:name", (req, res) => {
    let { name } = req.params;
    name = format_string(name);
    const selected_player = all_players.filter((player) =>
        format_string(player.name).includes(name),
    );
    res.status(200).send(selected_player);
});

app.get("/player-by-id/:id", (req, res) => {
    const { id } = req.params;
    const selected_player = all_players.find((player) => player.id === id);

    res.status(200).send(selected_player);
});

app.post("/add-new-player", (req, res) => {
    if (!req.body) {
        res.status(400).send("Erro ao ler dados enviados a API !!!");
        return;
    }

    const new_player = req.body;

    for (let player of all_players) {
        if (
            player.name === new_player.name &&
            player.position === new_player.position
        ) {
            return res.status(400).send("Esse jogador já foi cadastrado !!");
        }
    }

    new_player.id = randomUUID();
    all_players.push(new_player);
    res.status(200).send(new_player);
});

const port = 3000;
app.listen(port, () => console.log("API rodando ..."));
