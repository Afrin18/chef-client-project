import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import ChefCard from './ChefCard';

const chef = () => {
    const chef = useLoaderData();

    return (
        <div className='mt-4'>
            <h2>Chef hunt: {chef.length}</h2>
            {
                chef.map(cardData => <ChefCard key={cardData.id}></ChefCard>) 
                // <li key={cardData.id}>
                //     <Link to={`/cardData/${cardData.id}`}>
                //         {cardData.chef_name}
                //         </Link>
                // </li>)
            }
        </div>
    );
};

export default chef;