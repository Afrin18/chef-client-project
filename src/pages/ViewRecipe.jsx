import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';

const ViewRecipe = ({cardData}) => {
    // const cardData = useLoaderData();
    console.log(cardData);
    return (
        <div>
            <h2>Recipe details</h2>
        </div>
    );
};

export default ViewRecipe;