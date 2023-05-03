import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefCard = () => {
    const cardData = useLoaderData();
    console.log(cardData);

    return (
        <div className='grid grid-cols-3'>
            {/* <h3>{cardData.chef_name}</h3>
            <h5>{cardData.recipe}</h5>
            <img src={cardData.chef_img} alt=""/> */}
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;