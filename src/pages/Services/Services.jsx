import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import active from './../../assets/plan-active.png'
import inactive from './../../assets/plan.png';
import blueArrow from './../../assets/blue-arrow.png'
import greenArrow from './../../assets/green-arrow.png'
import blueBar from './../../assets/blue-bar.png'
import greenBar from './../../assets/green-bar.png'
import ReactOwlCarousel from 'react-owl-carousel';
import greenGlow from './../../assets/active-icon.png'
import blueGlow from './../../assets/blue-glow.png'
import { BlueGlow } from '../../components/BlueGlow/BlueGlow';
import { GreenGlow } from '../../components/GreenGlow/GreenGlow';

const Services = () => {
    const [service, setService] = useState('premium');
    const headerRef = useRef(null);
    const basicRef = useRef(null);
    const premiumRef = useRef(null);
    const standardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headerRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#services',
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(premiumRef.current, {
            opacity: 0,
            top: 50
        }, {
            opacity: 1,
            top: 0,
            duration: 0.4,
            scrollTrigger: {
                trigger: premiumRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(basicRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            // top: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: basicRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

        gsap.fromTo(standardRef.current, {
            opacity: 0,
            // top: 50
        }, {
            opacity: 1,
            // top: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: standardRef.current,
                start: 'top bottom',
                toggleActions: 'play reset play reset'
            }
        })

    }, [])

    // const [basicLength, setBasicLength] = useState(4)
    // const [premiumLength, setPremiumLength] = useState(4)
    // const [standardLength, setStandardLength] = useState(4)
    // console.log(document.getElementById('basic')?.parentElement.classList.contains('active'));
    let basicLength = 4;

    // const basicList = [
    //     "Demo Services",
    //     "Our Social Channels",
    //     "Counseling",
    //     "E-books",
    //     "Market News Updates",
    //     "After Market Data"
    // ]
    const premiumList = [
        "Full Basic to Advance statergies",
        "Equity and F & O",
        "Recorded & Live Mentorship",
        "Time / Date Cycle Loops",
        "Dynamic and static zones",
        "Astro / Lunar Cycles Mehthods",
        "WD Gann Theory",
        "Elliott Wave Mehthods"
    ]
    const standardList = [
        "Live Broadcasting + Mentorship",
        "Time Cycle Updates",
        "When to Entry, Exits, SL and Target",
        "F&O + Equity Trades",
        "Technical Indicators"
    ]

    const [basicDetails, setBasicDetails] = useState(false)
    const [premiumDetails, setPremiumDetails] = useState(false)
    const [premiumDetailsPhone, setPremiumDetailsPhone] = useState(false)
    const [standardDetails, setStandardDetails] = useState(false)

    return (
        <div className='mb-[118px]' id='services'>
            <h1 className='text-[38px] lg:text-[68px] text-[#8383FF] drop-shadow-[0_0_6px] font-bold text-center font-["Poppins sans-serif"]' ref={headerRef}>Our Plans</h1>
            {/* <img src={blueGlow} className='w-1/4 mx-auto' alt="" /> */}
            {/* <div className='blue-glow mx-auto'></div> */}
            <BlueGlow />
            {/* <p className='text-[13px] lg:text-[23px] font-semibold lg:w-1/3 text-center mx-auto mt-[24px]'>We provide customized services to ensure that you
                get the best possible experience.</p> */}

            <div className="hidden lg:grid grid-cols-3 px-[20px] lg:px-[106px] mt-[40px] lg:mt-[90px]">
                <div className={`h-fit px-[55px] 2xl:px-[75px] transition ${service === 'basic' ? 'text-[#82FF8F] scale-[1.2]' : 'text-white'}`} style={{ backgroundImage: `url(${service === 'basic' ? active : inactive})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 131%', backgroundPosition: 'center' }} onMouseEnter={() => setService('basic')}>
                    <div className="p-[30px] px-4 relative">
                        <h1 className={`text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto`}>Basic</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Basic</h1>
                        {service === 'basic' && <GreenGlow />}
                        <ul className='mt-[38px] ml-[5px] xl:ml-[40px] list-disc'>
                            <li className='text-[16px] font-light py-[8px]'>Demo Services</li>
                            <li className='text-[16px] font-light py-[8px]'>Our Social Channels</li>
                            <li className='text-[16px] font-light py-[8px]'>Counseling</li>
                            {/* {basicDetails && <> */}
                            <li className='text-[16px] font-light py-[8px]'>E-books</li>
                            <li className='text-[16px] font-light py-[8px]'>Market News Updates</li>
                            <li className='text-[16px] font-light py-[8px]'>After Market Data</li>
                            {/* </>} */}
                        </ul>
                        {!basicDetails && <img src={service === 'basic' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer' onClick={() => setBasicDetails(true)} alt="" />}
                        {basicDetails && <img src={service === 'basic' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' onClick={() => setBasicDetails(false)} alt="" />}
                        {/* <img src={service === 'basic' ? greenBar : blueBar} className="mt-[36px]" alt="" /> */}
                        <div className='mx-[30px]'>
                            <a href='https://chat.whatsapp.com/LYZFkiXpuJTF0J5Cxh9lSW' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === 'basic' ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>Free</a>
                        </div>
                    </div>
                </div>

                <div className={`h-fit px-[55px] 2xl:px-[75px] transition ${service === 'premium' ? 'text-[#82FF8F] scale-[1.2]' : 'text-white'}`} style={{ backgroundImage: `url(${service === 'premium' ? active : inactive})`, backgroundRepeat: 'no-repeat', backgroundSize: '95% 131%', backgroundPosition: 'center' }} onMouseEnter={() => setService('premium')}>
                    <div className="p-[30px] px-4 relative">
                        <h1 className='text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto'>Premium</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Premium</h1>
                        {service === 'premium' && <GreenGlow />}

                        <ul className='mt-[38px] mx-[5px] xl:ml-[35px] list-disc'>
                            {/* <li className='text-[16px] font-light py-[8px]'>Full Basic to Advance statergies</li>
                            <li className='text-[16px] font-light py-[8px]'>Equity and F&O</li>
                            <li className='text-[16px] font-light py-[8px]'>Recorded & Live Mentorship</li>
                            {premiumDetails && <>
                                <li className='text-[16px] font-light py-[8px]'>Time/Date Cycle Loops</li>
                                <li className='text-[16px] font-light py-[8px]'>Dynamic and static zones</li>
                                <li className='text-[16px] font-light py-[8px]'>Astro/Lunar Cycles Mehthods</li>
                                <li className='text-[16px] font-light py-[8px]'>WD Gann Theory</li>
                                <li className='text-[16px] font-light py-[8px]'>Elliott Wave Mehthods</li>
                            </>} */}
                            <li className='text-[16px] font-light py-[8px]'>Time/Date Cycle Loops</li>
                            <li className='text-[16px] font-light py-[8px]'>Dynamic and static zones</li>
                            <li className='text-[16px] font-light py-[8px]'>Astro/Lunar Cycles Mehthods</li>
                            <li className='text-[16px] font-light py-[8px]'>WD Gann Theory</li>
                            <li className='text-[16px] font-light py-[8px]'>Elliott Wave Mehthods</li>
                            {premiumDetails && <>
                                <li className='text-[16px] font-light py-[8px]'>Option Selling Statergy</li>
                                <li className='text-[16px] font-light py-[8px]'>Hedging Statergy</li>
                                <li className='text-[16px] font-light py-[8px]'>Master of Price Action</li>
                                <li className='text-[16px] font-light py-[8px]'>BigFoot player Entries</li>
                                <li className='text-[16px] font-light py-[8px]'>Advancence Option statergies</li>
                                <li className='text-[16px] font-light py-[8px]'>Psychology Buildup</li>
                                <li className='text-[16px] font-light py-[8px]'>Risk Management</li>
                            </>}
                        </ul>
                        {!premiumDetails && <img src={service === 'premium' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer' onClick={() => setPremiumDetails(true)} alt="" />}
                        {premiumDetails && <img src={service === 'premium' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' onClick={() => setPremiumDetails(false)} alt="" />}
                        <div className='mx-[30px]'>
                            <a href='https://qoohoo.in/courses/alpha-plan-wm6v32wc' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === 'premium' ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>&#8377; 9999 /-</a>
                        </div>
                    </div>
                </div>
                <div className={`h-fit px-[55px] 2xl:px-[75px] transition ${service === 'standard' ? 'text-[#82FF8F] scale-[1.2]' : 'text-white'}`} style={{ backgroundImage: `url(${service === 'standard' ? active : inactive})`, backgroundSize: '95% 131%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} onMouseEnter={() => setService('standard')}>
                    <div className="p-[30px] pr-4 relative">
                        <h1 className='text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto'>Standard</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Standard</h1>
                        {service === 'standard' && <GreenGlow />}

                        <ul className='mt-[38px] mx-[5px] xl:ml-[20px] list-disc'>
                            <li className='text-[16px] font-light py-[8px]'>Live Broadcasting + Mentorship</li>
                            <li className='text-[16px] font-light py-[8px]'>Time Cycle Updates</li>
                            <li className='text-[16px] font-light py-[8px]'>When to Entry, Exits, SL and Target</li>
                            <li className='text-[16px] font-light py-[8px]'>F&O + Equity Trades</li>
                            <li className='text-[16px] font-light py-[8px]'>Technical Indicators</li>
                            <li className='text-[16px] font-light py-[8px]'>Important Websites & Software Links</li>
                            {standardDetails && <>
                                <li className='text-[16px] font-light py-[8px]'>Basics Recorded Tutorials</li>
                                <li className='text-[16px] font-light py-[8px]'>Dynamic & Static Level sheets</li>
                                <li className='text-[16px] font-light py-[8px]'>Learning Materials</li>
                                <li className='text-[16px] font-light py-[8px]'>Live QnA</li>
                            </>}
                        </ul>
                        {!standardDetails && <img src={service === 'standard' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer' onClick={() => setStandardDetails(true)} alt="" />}
                        {standardDetails && <img src={service === 'standard' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' onClick={() => setStandardDetails(false)} alt="" />}
                        <div className="mr-[30px]">
                            <a href='https://qoohoo.in/channels/advisory-plan-ywht4vjv' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === 'standard' ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>&#8377; 2499 /-</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden mt-[80px] z-0">
                <ReactOwlCarousel items={1.4} center theme loop dots={true}>
                    <div className='item px-10 mx-auto z-0' id='premium'>
                        <h1 className='text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto'>Premium</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Premium</h1>
                        <ul className='mt-[85px] ml-[5px] list-disc'>
                            <li className='text-[16px] font-light py-[8px]'>Full Basic to Advance statergies</li>
                            <li className='text-[16px] font-light py-[8px]'>Equity and F&O</li>
                            <li className='text-[16px] font-light py-[8px]'>Recorded & Live Mentorship</li>
                            <li className='text-[16px] font-light py-[8px]'>Time/Date Cycle Loops</li>
                            <li className='text-[16px] font-light py-[8px]'>Dynamic and static zones</li>
                            <li className='text-[16px] font-light py-[8px]'>Astro/Lunar Cycles Mehthods</li>
                            {premiumDetailsPhone ? <>
                                <li className='text-[16px] font-light py-[8px]'>WD Gann Theory</li>
                                <li className='text-[16px] font-light py-[8px]'>Elliott Wave Mehthods</li>
                            </> : <></>}
                        </ul>
                        <img src={service === 'premium' ? greenArrow : blueArrow} className={`w-[29px] mx-auto mt-[48px] cursor-pointer ${premiumDetailsPhone && 'rotate-180'}`} onClick={() => {
                            premiumDetailsPhone ? setPremiumDetailsPhone(false) : setPremiumDetailsPhone(true);
                        }} alt="" />
                        {/* {premiumDetailsPhone && <img src={service === 'premium' ? greenArrow : blueArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer rotate-180' onClick={() => setPremiumDetailsPhone(false)} alt="" />} */}

                        <div className='mx-[30px]'>
                            <a href='https://qoohoo.in/courses/alpha-plan-wm6v32wc' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: `url(${greenBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>&#8377; 9999 /-</a>
                        </div>
                    </div>

                    <div className='item px-12 mx-auto z-0' id='basic'>
                        <h1 className={`text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto`}>Basic</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Basic</h1>
                        <ul className='mt-[85px] mx-[5px] list-disc'>
                            <li className='text-[16px] font-light py-[8px]'>Demo Services</li>
                            <li className='text-[16px] font-light py-[8px]'>Our Social Channels</li>
                            <li className='text-[16px] font-light py-[8px]'>Counseling</li>
                            <li className='text-[16px] font-light py-[8px]'>E-books</li>
                            <li className='text-[16px] font-light py-[8px]'>Market News Updates</li>
                            <li className='text-[16px] font-light py-[8px]'>After Market Data</li>
                        </ul>
                        {/* <img src={greenArrow} onClick={() => basicLength = basicList.length} className='w-[29px] mx-auto mt-[48px] cursor-pointer' alt="" /> */}

                        <div className='mx-[30px]'>
                            <a href='https://chat.whatsapp.com/LYZFkiXpuJTF0J5Cxh9lSW' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === 'basic' ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>Free</a>
                        </div>
                    </div>

                    <div className='item px-12 mx-auto z-0'>
                        <h1 className='text-center opacity-30 font-medium text-[38px] uppercase blur-[8px] absolute top-0 left-0 right-0 m-auto'>Standard</h1>
                        <h1 className='text-center font-medium text-[38px] uppercase absolute top-0 left-0 right-0 m-auto'>Standard</h1>
                        <ul className='mt-[85px] ml-[5px] list-disc'>
                            <li className='text-[16px] font-light py-[8px]'>Live Broadcasting + Mentorship</li>
                            <li className='text-[16px] font-light py-[8px]'>Time Cycle Updates</li>
                            <li className='text-[16px] font-light py-[8px]'>When to Entry, Exits, SL and Target</li>
                            <li className='text-[16px] font-light py-[8px]'>F&O + Equity Trades</li>
                            <li className='text-[16px] font-light py-[8px]'>Technical Indicators</li>
                        </ul>
                        <img src={greenArrow} className='w-[29px] mx-auto mt-[48px] cursor-pointer' alt="" />

                        <div className="mr-[30px]">
                            <a href='https://qoohoo.in/channels/advisory-plan-ywht4vjv' className='py-[16px] text-center text-[28px] hover:scale-110 transition inline-block w-full mt-[83px] font-medium' style={{ backgroundImage: service === 'standard' ? `url(${greenBar})` : `url(${blueBar})`, backgroundSize: '137% 112%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>&#8377; 2499 /-</a>

                        </div>                    </div>
                </ReactOwlCarousel>
            </div>
        </div>
    );
};

export default Services;