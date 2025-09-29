import React, { use } from 'react';
import PriceCard from './PriceCard';

const PricingOption = ({pricingPromise}) => {

    const priceData = use(pricingPromise)
    // console.log(priceData)

    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>Get Our Membership</h1>
            <div className='md:flex justify-around mt-8'>
                {
                    priceData.map(pricing => <PriceCard key={pricing.id} pricing={pricing}/>)
                }
            </div>
        </div>
    );
};

export default PricingOption;