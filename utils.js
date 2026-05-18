export function formatString(str) {
    let formated_str = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-")
        .toLowerCase();
    return formated_str;
}
