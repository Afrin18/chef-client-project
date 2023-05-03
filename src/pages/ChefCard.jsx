import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefCard = ({cardData}) => {
    // const cardData = useLoaderData();
    // const {id, chef_img, chef_name, experience, recipe, likes, bio} = cardData;
    console.log(cardData);
    console.log(cardData.chef_img);

    return (
        <div className='flex flex-cols-3'>
            {/* <h3>{cardData.chef_name}</h3>
            <h5>{cardData.recipe}</h5>
            <img src={cardData.chef_img} alt=""/> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <img className='rounded' src={cardData.chef_img} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{cardData.chef_name}</h2>
                    <p>Experience: {cardData.experience} </p>
                    <p>Number of Recipe: {cardData.recipe} </p>
                    <p>Likes: {cardData.likes} </p>
                    <div className="card-actions justify-end">
                        <Link to=''>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;