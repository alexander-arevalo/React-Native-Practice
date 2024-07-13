import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokedex = async () => {
  try {
    const response = await axios.get(`${API_URL}/pokedex/1`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
