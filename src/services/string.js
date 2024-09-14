export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function summarizeText(string, limit=60) {
    if (string.length > limit){
        return string.slice(0, limit) + "...";
    }

    return string;
}