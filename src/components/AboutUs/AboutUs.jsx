import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import greenBull from './../../assets/Layer 7.png';
// import circleBg from './../../assets/circle-bg.png'

const AboutUs = () => {
    const textRef = useRef(null)
    const imageRef = useRef(null)


    useEffect(() => {
        gsap.fromTo(textRef.current, {
            opacity: 0,
            left: '-50vw'
        }, {
            opacity: 1,
            delay: 0.5,
            duration: 1,
            left: 0,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(imageRef.current, {
            opacity: 0,
            left: '100vw'
        }, {
            opacity: 1,
            delay: 0.5,
            duration: 1,
            left: 0,
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })
    }, [])

    return (
        <div className='px-[20px] lg:px-[116px] pt-[150px] flex flex-col-reverse lg:flex-row justify-center pb-[105px] lg:pb-[208px] overflow-x-hidden text-right lg:text-left' id='about-us'>
            <div className="lg:w-7/12 w-full mr-auto relative z-[0]" ref={textRef}>
                <h1 className='text-[50px] lg:text-[114px] font-bold text-[#83FF8F] drop-shadow-[0_0_6px_#83FF8F]'>About Us</h1>
                <h6 className='text-[20px] lg:text-[30px] font-semibold'><span className='text-[#83FF8F]'>Welcome to Growcial Bull -</span> The brand that's passionate
                    about teaching people how</h6>
                <p className='text-[#83FF8F] text-[15px] lg:text-[24px] font-light'>to trade and helping them achieve financial
                    success! We offer an engaging and Interactive
                    experience through our live trading sessions,
                    where every session is profitable. Our team of
                    experts is dedicated to sharing their knowledge
                    and strategies with you, empowering you to
                    take control of your finances and grow your
                    wealth.</p>
            </div>

            <div className="lg:w-3/12 w-full relative z-[0] h-1/2 lg:h-auto hidden lg:block" ref={imageRef}>
                <img src={greenBull} className='z-10 mx-auto absolute left-0 right-0 top-10 m-auto' alt="" />
                <img src={greenBull} className='z-0 mx-auto absolute blur left-0 right-0 top-10 m-auto' alt="" />
            </div>
        </div>
    );
};

export default AboutUs;