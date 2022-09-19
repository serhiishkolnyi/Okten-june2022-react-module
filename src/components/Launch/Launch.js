import React from 'react';

import './Launch.css';

const Launch = ({launch}) => {

    return (
        <div className={'launchContainer'}>
            <div className={'title'}>{launch.flight_number} - {launch.launch_year}</div>
            <div className={'title'}>{launch.mission_name}</div>
            <img src={launch.links.mission_patch_small} alt="photo"/>
        </div>
    );
};

export {Launch};