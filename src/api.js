const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function getPokemon(indentity) {
    try {
        const url = `${BASE_URL}${indentity.toLowerCase()}`
        const response = await fetch(url);
        if (!response.ok) throw new Error("No trobat");
        return await response.jason();
    } catch (error) {
        console.error("Error: API", error);
        throw error;
    }
}