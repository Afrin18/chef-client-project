import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import ChefCard from './ChefCard';

const chef = () => {
    const chef = useLoaderData();
    // console.log(chef);

    return (
        <div className='mt-4'>
            <h2>Chef hunt: {chef.length}</h2>
            {
                chef.map(cardData => 
                // <ChefCard key={cardData.id}>
                //     <Link to={`/cardData/${cardData.id}`}>
                //          {cardData.chef_name}
                //          </Link>
                // </ChefCard>) 
                <li key={cardData.id}>
                    <Link to={`/cardData/${cardData.id}`}>
                        {/* {cardData.chef_name} */}
                        <button className="btn btn-ghost">Button</button>
                        </Link>
                </li>)
            }
        </div>
    );
};

export default chef;