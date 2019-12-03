
export function request(url, options) {
    return fetch(url)
        .then(async response => response.json())
        .catch(e => {throw new Error(e)})
}