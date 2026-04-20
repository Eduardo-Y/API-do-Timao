import express, { json } from "express";
import ALL_PLAYERS from "./data.js";
import Joi from "joi";
import { formatString, validateRequest, verifyId } from "./utils.js";
import { randomUUID } from "node:crypto";

let all_players = ALL_PLAYERS;
const app = express();

global.positions = [
    "Goalkeeper",
    "Midfielder",
    "Right Back",
    "Left Back",
    "Defensive Midfielder",
    "Forward",
    "Right Winger",
    "Left Winger",
];

global.schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .alter({
            create: (f) => f.required(),
        }),
    position: Joi.string()
        .valid(...positions)
        .alter({
            create: (f) => f.required(),
        }),
    started: Joi.number()
        .min(1910)
        .max(2100)
        .alter({
            create: (f) => f.required(),
        }),
    left: Joi.number()
        .min(1910)
        .max(2100)
        .alter({
            create: (f) => f.required(),
        }),
    stats: Joi.object({
        goals: Joi.number().min(0).max(2000),
        penalty_defenses: Joi.number().min(0).max(200),
    }).min(1),
    titles: Joi.array()
        .items(Joi.string().min(10).max(50).required())
        .alter({
            create: (f) => f.required(),
        }),
    id: Joi.string().forbidden(),
})
    .alter({
        update: (f) => f.min(1),
    })
    .max(6);

app.use(json());

app.get("/", (req, res) => {
    res.status(200).send(all_players);
});

app.get("/player-by-name/:name", (req, res) => {
    let { name } = req.params;
    name = formatString(name);
    const selected_player = all_players.filter((player) =>
        formatString(player.name).includes(name),
    );
    if (selected_player.length === 0) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }
    res.status(200).send(selected_player);
});

app.get("/player-by-id/:id", (req, res) => {
    const requestId = req.params.id;
    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }
    const selected_player = all_players.find(
        (player) => player.id === requestId,
    );

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }
    res.status(200).send(selected_player);
});

app.post("/add-new-player", (req, res) => {
    const new_player = req.body;
    const createSchema = global.schema.tailor("create");

    if (!new_player) {
        res.status(400).send("Erro ao ler dados enviados a API !!!");
        return;
    }

    if (Object.keys(new_player) > 5) {
    }

    const isRequestInvalid = validateRequest(createSchema, new_player);
    if (isRequestInvalid) {
        res.status(400).send(isRequestInvalid);
        return;
    }

    for (let player of all_players) {
        if (
            player.name === new_player.name &&
            player.position === new_player.position
        ) {
            return res.status(200).send("Esse jogador já foi cadastrado !!");
        }
    }

    new_player.id = randomUUID();
    all_players.push(new_player);
    res.status(200).send(new_player);
});

app.put("/update-player/:id", (req, res) => {
    const requestId = req.params.id;
    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }

    const selected_player = all_players.find((p) => p.id === requestId);
    const requestData = req.body;
    const updateSchema = global.schema.tailor("update");

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }

    const isRequestInvalid = validateRequest(updateSchema, requestData);
    if (isRequestInvalid) {
        res.status(400).send(isRequestInvalid);
        return;
    }

    for (const key of Object.keys(requestData)) {
        if (Object.keys(selected_player).includes(key)) {
            selected_player[key] = requestData[key];
        }
    }

    res.status(200).send(selected_player);
});

app.delete("/delete-player/:id", (req, res) => {
    const requestId = req.params.id;
    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }

    const selected_player = all_players.find((p) => p.id === requestId);

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }

    all_players = all_players.filter((p) => p.id !== requestId);
    res.status(200).send(selected_player);
});

const port = 3000;
app.listen(port, () => console.log("API rodando ..."));
