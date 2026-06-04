import express, { json } from "express";
import {
    validateCreateSchema,
    validateUpdateSchema,
    isLetters,
    verifyId,
} from "../request-validation.js";
import { formatString } from "../utils.js";
import { randomUUID } from "node:crypto";
import PlayersRepository from "../repository/PlayersRepository.js";

const player = express.Router();

player.get("/", async (req, res) => {
    const results = await new PlayersRepository().getAll();
    res.status(200).send(results);
});

player.get("/get-by-name/:name", async (req, res) => {
    let { name } = req.params;

    const isNameInvalid = isLetters(name);
    if (isNameInvalid) {
        res.status(400).send(isNameInvalid);
    }

    name = formatString(name);

    const selected_player = await new PlayersRepository().getByName(name);
    res.status(200).send(selected_player);
});

player.get("/get-by-id/:id", async (req, res) => {
    const requestId = req.params.id;

    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }

    const selected_player = await new PlayersRepository().getById(requestId);

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }
    res.status(200).send(selected_player);
});

player.post("/create", async (req, res) => {
    const requestPlayer = req.body;
    let { name, position } = requestPlayer;

    if (!req.body) {
        res.status(400).send("Erro ao ler dados enviados a API !!!");
        return;
    }

    const requestIsInvalid = validateCreateSchema(req.body);
    if (requestIsInvalid) {
        res.status(400).send(requestIsInvalid);
        return;
    }

    const allPlayers = await new PlayersRepository().getAll();
    for (let player of allPlayers) {
        if (
            player.name === requestPlayer.name &&
            player.position === requestPlayer.position
        ) {
            return res.status(200).send("Esse jogador já foi cadastrado !!");
        }
    }

    const newPlayer = await new PlayersRepository().create(name, position);

    res.status(200).send(
        "Jogador criado com sucesso!  " + JSON.stringify(requestPlayer),
    );
});

player.put("/update/:id", async (req, res) => {
    const requestId = req.params.id;
    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }

    const selected_player = await new PlayersRepository().getById(requestId);

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }

    let requestData = req.body;
    const requestIsInvalid = validateUpdateSchema(requestData);

    if (requestIsInvalid) {
        res.status(400).send(requestIsInvalid);
        return;
    }

    const requestKeys = Object.keys(requestData);

    requestData = Object.values(req.body);
    const playerUpdated = await new PlayersRepository().update(
        requestId,
        requestKeys,
        requestData,
    );

    res.status(200).send(playerUpdated);
});

player.delete("/delete/:id", async (req, res) => {
    const requestId = req.params.id;
    const isIdInvalid = verifyId(requestId);
    if (isIdInvalid) {
        res.status(400).send(isIdInvalid);
        return;
    }

    const selected_player = await new PlayersRepository().getById(requestId);

    if (!selected_player) {
        res.status(404).send("Jogador não encontrado!!!");
        return;
    }

    const deletedPlayer = await new PlayersRepository().delete(requestId);

    res.status(200).send(selected_player);
});

export default player;
