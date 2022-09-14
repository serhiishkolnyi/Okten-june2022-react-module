import React, {useEffect, useState} from 'react';

import './Characters.css'
import simpsons from "../../database/simpsons";
import Character from "../character/Character";


const Characters = () => {
    const charactersTheSimpsons = simpsons;

    let [charactersTheRickAndMorty, setCharactersTheRickAndMorty] = useState([]);


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                    setCharactersTheRickAndMorty(value.results);
                });
    },[]);




    return (
        <div>

            <h2>The Simpsons</h2>
            <div className={'wrapper'}>
                {
                    charactersTheSimpsons.map((character, index) => <Character key={index} character={character}/>)
                }
            </div>

            <h2>The Rick and Morty</h2>
            <div className={'wrapper'}>
                {
                    charactersTheRickAndMorty.map(character => <Character key={character.id} character={character}/>)
                }
            </div>

        </div>
    );
};

export default Characters;