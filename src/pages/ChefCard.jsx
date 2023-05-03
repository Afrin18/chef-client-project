import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefCard = () => {
    const cardData = useLoaderData();
    console.log(cardData.experience
);

    return (
        <div className=''>
            <h3>{cardData.chef_name}</h3>
            <h5>{cardData.recipe}</h5>
            <img src={cardData.chef_img} alt=""/>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardData.chef_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ChefCard;