import { Contact } from 'lucide-react';
import React from 'react';
import PriceFeature from './PriceFeature';

const PriceCard = ({pricing}) => {
    // console.log(pricing)
const {features} = pricing

    return (
        <div className='border bg-amber-50 text-black rounded-lg py-2 px-5'>
            <div>
                <h1 className='text-2xl text-center font-bold'>{pricing.name}</h1>
                <h1 className='font-bold'>Price: {pricing.price}</h1>
            </div>
            <div className='space-y-4 bg-amber-500 p-2 rounded-xl my-2'>
                {
                    features.map((feature, index) => <PriceFeature key={index} feature={feature }/>)
                }
            </div>
            <button class="btn btn-wide">Wide</button>
        </div>
    );
};

export default PriceCard;