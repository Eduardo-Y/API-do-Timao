export function formatString(str) {
    let formated_str = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-");
    return formated_str.toLowerCase();
}
