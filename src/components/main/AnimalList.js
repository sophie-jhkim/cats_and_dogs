import React, { useEffect, useState } from 'react';
import AnimalItem from './AnimalItem';
import '../../css/AnimalList.css'


const AnimalList = ({data}) => {

    return (
        <ul className="list_wrap">
            {
                data.map(item => <AnimalItem key={item.desertionNo} item={item}/>)
            }
        </ul>
    );
};

export default AnimalList;