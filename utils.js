import Joi from "joi";

export function formatString(str) {
    let formated_str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return formated_str.toLowerCase();
}

export function validateRequest(schema, value) {
    const responseError = schema.validate(value)?.error;
    if (responseError) {
        return responseError.message;
    }
    return false;
}

export function isLetter(str) {
    if (id.length !== 36 || !/^[a-zA-Z-]+$/i.test(id)) {
        return "O id do jogador deve conter 36 caracteres e eles devem ser alphanuméricos!!!";
    }
    return false;
}

export function verifyId(id) {
    if (id.length !== 36 || !/^[a-zA-Z0-9-]+$/i.test(id)) {
        return "O id do jogador deve conter 36 caracteres e eles devem ser alphanuméricos!!!";
    }
    return false;
}
