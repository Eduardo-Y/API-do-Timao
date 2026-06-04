import Joi from "joi";

const positions = [
    "Goalkeeper",
    "Midfielder",
    "Right Back",
    "Left Back",
    "Defensive Midfielder",
    "Forward",
    "Right Winger",
    "Left Winger",
];

const updateSchema = Joi.object({
    name: Joi.string().min(3).max(50),

    position: Joi.string().valid(...positions),

    started: Joi.number().min(1910).max(2100),

    left: Joi.number().min(1910).max(2100),

    stats: Joi.object({
        goals: Joi.number().min(0).max(2000),
        penalty_defenses: Joi.number().min(0).max(200),
    }).min(1),

    titles: Joi.array().items(Joi.string().min(10).max(50).required()),

    id: Joi.string().forbidden(),
}).max(6);

const createSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),

    position: Joi.string()
        .valid(...positions)
        .required(),

    id: Joi.string().forbidden(),
}).max(6);

function validateSchema(schema, json) {
    const responseError = schema.validate(json, { abortEarly: false })?.error;
    if (responseError) {
        return responseError.message;
    }
    return false;
}

export function validateCreateSchema(json) {
    return validateSchema(createSchema, json);
}

export function validateUpdateSchema(json) {
    return validateSchema(updateSchema, json);
}

export function isLetters(str) {
    if (!/^[a-zA-Z-]+$/i.test(str)) {
        return "O nome dos jogadores deve ser pesquisado apenas com palavras separaradas por '-' (Ex: Edilson-Capetinha)!!!";
    }
    return false;
}

export function verifyId(id) {
    if (id.length !== 36 || !/^[a-zA-Z0-9-]+$/i.test(id)) {
        return "O id do jogador deve conter 36 caracteres e eles devem ser alphanuméricos!!!";
    }
    return false;
}
