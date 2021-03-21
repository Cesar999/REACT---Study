import axios from 'axios';

interface Data {
    msg: string,
    data: any
}

const createTrainer = async (name: string, age: number) => {
    const result: Data = await axios.post(`http://localhost:3002/createTrainer`, {name, age});
    console.log(result.data.msg);
    return result.data.data;
}

const getTrainer = async (name: string) => {
    const result: Data = await axios.get(`http://localhost:3002/getTrainer/${name}`);
    console.log(result.data.msg);
    return result.data.data;
}

const savePokemon = async (trainerName: string, pokemonID: number) => {
    const result: Data = await axios.post(`http://localhost:3002/savePokemon`, {trainerName, pokemonID});
    console.log(result.data.msg);
    return result.data.data;
}

const deletePokemon = async (trainerName: string, pokemonID: number) => {
    const result: Data = await axios.post(`http://localhost:3002/deletePokemon`, {trainerName, pokemonID});
    console.log(result.data.msg);
}

const getRandomPokemon = async () => {
    const result: Data = await axios.get(`http://localhost:3002/getRandomPokemon`);
    console.log(result.data.msg);
    return result.data.data;
}

const getAllTrainers = async () => {
    const result: Data = await axios.get(`http://localhost:3002/getAllTrainers`);
    console.log(result.data.msg);
    return result.data.data;
}

export {createTrainer, getTrainer, savePokemon, deletePokemon, getRandomPokemon, getAllTrainers}