import React, {useEffect, useState} from 'react';

import {launchService} from "../../services";
import {Launch} from "../Launch/Launch";

import './Launches.css';


const Launches = () => {

    let [launches, setLaunches] = useState([]);

    useEffect(()=> {
        launchService.getAll().then(({data}) => {
            const filterData = data.filter(launch => launch.launch_year != 2020);
            setLaunches (filterData);

        })
    },[])


    return (
        <div className={'launchesContainer'}>
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch} />)}
        </div>
    );
};

export {Launches};