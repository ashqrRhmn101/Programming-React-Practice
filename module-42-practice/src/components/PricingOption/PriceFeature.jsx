import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeature = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <p className='flex gap-4 text-white'><CircleCheckBig/> {feature}</p>
        </div>
    );
};

export default PriceFeature;