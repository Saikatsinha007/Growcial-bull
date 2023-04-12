import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import advisoryPlan from "./../../assets/ADVISORY PLAN hk23.jpg";
import alphaPlan from "./../../assets/growcial bull_3 1920x1080.jpg";


const EnrollContent = ({ setEnrollVisible }) => {
    const firstImageRef = useRef(null)
    const secondImageRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(firstImageRef.current, {
            top: -10,
            opacity: 0
        }, {
            top: 0,
            opacity: 1
        })
        gsap.fromTo(secondImageRef.current, {
            top: -10,
            opacity: 0,
        }, {
            top: 0,
            opacity: 1,
            delay: 0.1
        })
        gsap.fromTo(containerRef.current, {
            // top: -10,
            opacity: 0,
        }, {
            // top: 0,
            opacity: 1,
            delay: 0.1
        })

    })

    const close = () => {

        gsap.fromTo(firstImageRef.current, {
            top: 0,
            opacity: 1
        }, {
            top: -10,
            opacity: 0
        })
        gsap.fromTo(secondImageRef.current, {
            top: 0,
            opacity: 1,
        }, {
            top: -10,
            opacity: 0,
            delay: 0.1
        })
        gsap.fromTo(containerRef.current, {
            opacity: 1,
        }, {
            opacity: 0,
            delay: 0.3
        })

        setTimeout(() => setEnrollVisible(false), 400)
    }

    return (
        <div className='fixed top-0 z-50 lg:h-screen lg:w-screen backdrop-blur p-10 overflow-y-auto' ref={containerRef}>
            <div className="relative">
                <button className='text-[30px] absolute right-9 top-3' onClick={close}>&times;</button>
            </div>

            <div className="flex flex-col lg:flex-row justify-center lg:gap-x-10 lg:h-[80vh]">
                <a href="https://qoohoo.in/channels/advisory-plan-ywht4vjv" className='lg:w-1/4' target="_blank" rel="noreferrer">
                    <img src={advisoryPlan} ref={firstImageRef} className="h-auto animate-bounce-once relative" alt="" />
                </a>
                <a href="https://qoohoo.in/courses/alpha-plan-wm6v32wc" className='lg:w-1/4' target="_blank" rel="noreferrer">
                    <img src={alphaPlan} ref={secondImageRef} className="h-auto animate-bounce-once relative" alt="" />
                </a>
            </div>
        </div>
    );
};

export default EnrollContent;