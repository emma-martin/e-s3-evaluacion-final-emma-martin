const URL = "https://hp-api.herokuapp.com/api/characters";


const getCharacters = () => fetch(URL).then(response => response.json());

export {getCharacters};