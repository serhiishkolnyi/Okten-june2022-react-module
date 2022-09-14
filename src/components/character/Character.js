import React from 'react';

import './Character.css'

const Character = (props) => {

    const {id, name, status, gender, species, image} = props.character;

    return (
        <div className={'card'}>
            <div className={'card-title'}>{id} - {name}</div>
            <img src={image} alt="image"/>
            <div className={'card-info'}>
                <div><b> status:</b> {status}</div>
                <div><b> gender:</b> {gender}</div>
                <div><b> species:</b> {species}</div>
            </div>
        </div>
    );
};

export default Character;