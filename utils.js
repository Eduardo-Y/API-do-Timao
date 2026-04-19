export function format_string(str) {
    let formated_str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return formated_str.toLowerCase();
}
