import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const HeaderDetails = ({ item, setHeaderDetailsView }) => {
    const containerRef = useRef(null);
    const cardRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(containerRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.5
        })

        gsap.fromTo(cardRef.current, {
            delay: 1,
            scale: 0
        }, {
            scale: 1
        })
    }, [])

    const close = () => {
        gsap.fromTo(containerRef.current, {
            opacity: 1
        }, {
            opacity: 0,
            duration: 0.5
        })

        gsap.fromTo(cardRef.current, {
            delay: 1,
            scale: 1
        }, {
            scale: 0
        })
        setTimeout(() => setHeaderDetailsView(false), 1000)
    }

    return (<>
    
    <div className='h-screen w-screen backdrop-blur overflow-hidden fixed top-0 left-0 z-50 text-black flex items-center' ref={containerRef}>
            <div className='bg-white w-10/12 lg:w-1/6 m-auto rounded p-4 shadow' ref={cardRef}>
                <button className='text-5xl text-white absolute right-[-40px] top-[-40px]' onClick={close}>&otimes;</button>
                <img src={item?.image} className='mx-auto' alt="" />
                <h4 className='text-center text-xl my-3 font-medium'>{item?.text}</h4>
                <p>{item?.description}</p>
            </div>
        </div></>
       
    );
};

export default HeaderDetails;