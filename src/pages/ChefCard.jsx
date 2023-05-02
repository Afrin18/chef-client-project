import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefCard = () => {
    const cardData = useLoaderData();
    console.log(cardData);

    return (
        <div>
            <h3>{cardData.chef_name}</h3>
            <h5>{cardData.recipe}</h5>
            <img src={cardData.chef_img} alt=""/>
        </div>
    );
};

export default ChefCard;