import React from 'react';

import css from './Album.module.css';

const Album = ({album}) => {
    return (
        <div className={css.albumContainer}>
            {album.userId} - {album.id} - {album.title}
        </div>
    );
};

export {Album};