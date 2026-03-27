const CLAU = "meu_equip";

export const guardar = (nom) => {
    const equip = llistar();
    if(!equip.includes(nom)) {
        equip.push(nom);
        localStorage.setItem(CLAU, JSON.stringify(equip));
    }
};

export const llistar = () => JSON.parse(localStorage.getItem);

export const eliminar = (nom) => {
    const equip = llistar().filter(p => p !== nom);
    localStorage.setItem(CLAU, JSON.stringify(equip));
};

//import {dfdfsd} from './fdgfdgd.js';