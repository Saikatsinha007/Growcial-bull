//Testimonial

import React, { useState } from 'react'

export const Testimonial = ({ item }) => {
    const { name, image, location, description, rating } = item

    const [full, setFull] = useState(false);
    // console.log(description.includes('<br />'));
    return (
        <div className="item" >
            <div className='flex items-center flex-col justify-center'>
                <div className='w-[150px] h-[150px] lg:my-[55px] my-[20px]'>
                    <img src={image} className="rounded-full ring-4 ring-gray-400" alt={name} />
                </div>
                <h6 className='text-[15px] lg:text-[20px] lg:w-7/12 text-center'>
                    <span className='font-black'>{name}</span>
                </h6>
                <h6 className='text-[15px] lg:text-[20px] lg:w-7/12 text-center'>
                    <span className='font-bold'>({location})</span>
                </h6>
                <p className='w-11/12 lg:w-2/3 text-justify font-medium'>
                    {
                        full
                            ?
                            description.includes('<br />')
                                ? <>
                                    {description.split("<br />").map(item => <>
                                        {item}  <br />
                                    </>)}
                                    . <span className='cursor-pointer' onClick={() => setFull(false)}>... read less</span>
                                </>
                                :
                                <>{description.slice(0, 105)} <span className='cursor-pointer' onClick={() => setFull(true)}>... read more</span></>
                            :
                            <>{description.slice(0, 105)} <span className='cursor-pointer' onClick={() => setFull(true)}>... read more</span></>
                    }
                </p>
                <img src={rating} className="rating mt-[19px]" alt="" />
            </div>
        </div>
    )
}



