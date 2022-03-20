export function generateUrl(props) {
    const query = window.location.search
        .split("&")
        .map((str) => str.replace("?", ""));
    const newParams = {};
    query
        .map((str: string) => str.split("="))
        .forEach((str) => {
            newParams[str[0]] = str[1];
        });
    for (const [key, value] of Object.entries(props)) {
        newParams[key] = value;
    }
    let newUrl = "?";
    for (const [key, value] of Object.entries(newParams)) {
        newUrl += `${key}=${value}&`;
    }
    return newUrl.slice(0, newUrl.length - 1);
}
