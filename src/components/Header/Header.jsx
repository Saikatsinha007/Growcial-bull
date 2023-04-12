import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';
import Cause from '../Cause/Cause';
import Charts from '../Charts/Charts';
import bars from "./../../assets/icons/bars.png"
import books from "./../../assets/icons/book.png"
import calendar from "./../../assets/icons/calender.png"
import clock from "./../../assets/icons/clock (1) 1.png"
import globe from "./../../assets/icons/Group 1.png"
import options from "./../../assets/icons/options.png";
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import HeaderDetails from '../HeaderDetails/HeaderDetails';
import bigFoot from './../../assets/big foot player entrys-01.png';
import eliteWave from './../../assets/eliet wave-01.png'
import physicology from './../../assets/physicology-01.png'
import greenArrow from './../../assets/green-arrow.png';
import priceAction from './../../assets/price action-01-01.png'
import riskManagement from './../../assets/risk management-01.png';
import advanceOptionStrategies from './../../assets/Advance option strategies.png';
import astro from './../../assets/Astro.png';
import dynamicAndStatic from './../../assets/Dynamic & static.png';
import gann from './../../assets/WD gann.png';
import time from './../../assets/Time cycle.png';
import masterofPrice from './../../assets/Master of price.png';
import elliotwaves from './../../assets/Elliot wave.png';
import bigfoot from './../../assets/Bigfoot.png';
import Psychology from './../../assets/Psycology.png';
import Riskmanagement from './../../assets/Risk management.png';
import calender from './../../assets/calender.png';

const Header = () => {
    const text = "We believe that knowledge is power, and we strive to empower our users with a deep understanding of trading practices, including chart patterns and market analysis. Our team of experienced professionals has years of experience in the field and is passionate about sharing their expertise with others. Whether you're a seasoned trader or just starting, Growcial Bull is the perfect place to develop your skills and gain a competitive edge in the market. Join us today and take your trading game to the next level."
    // alert(text.length / 2)
    const [length, setLength] = useState(text.length / 2);
    const [headerDetails, setHeaderDetails] = useState(0);
    const [headerDetailsView, setHeaderDetailsView] = useState(false);


    const causes = [
        // {
        //     id: 0,
        //     image: clock,
        //     text: "Time Cycle",
        //     description: "Time cycle is a trading tool used to predict future price movements based on past market cycles. It involves analysing the time periods between major market movements and using this information to forecast when the next major market move will occur."
        // },
        // {
        //     id: 1,
        //     image: globe,
        //     text: "Astro cycles",
        //     description: "Astro cycle is a trading technique that uses astrology to predict future market movements. It involves analyzing the positions of planets and stars to identify potential market turning points."
        // },
        // {
        //     id: 2,
        //     image: books,
        //     text: "WD Gann Methods",
        //     description: " WD Gann was a trader who developed a set of trading methods based on geometric patterns, time cycles, and price levels. These methods involve using mathematical formulas and ratios to predict future market movements."
        // },
        // {
        //     id: 3,
        //     image: calendar,
        //     text: "Date Cycles",
        //     description: " WD Gann was a trader who developed a set of trading methods based on geometric patterns, time cycles, and price levels. These methods involve using mathematical formulas and ratios to predict future market movements."
        // },
        // {
        //     id: 4,
        //     image: bars,
        //     text: "Dynamic & Static Levels",
        //     description: " WD Gann was a trader who developed a set of trading methods based on geometric patterns, time cycles, and price levels. These methods involve using mathematical formulas and ratios to predict future market movements."
        // },
        // {
        //     id: 5,
        //     image: options,
        //     text: "Advance Option Strategies",
        //     description: "Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile."
        // },
        // {
        //     id: 6,
        //     image: bigFoot,
        //     text: "Bigfoot Player Entries",
        //     description: 'Bigfoot player entries are trading strategies that involve identifying the trading activity of institutional investors or "bigfoot" players. These strategies involve following the trades of these players and using this information to make trading decisions.'
        // },
        // {
        //     id: 7,
        //     image: eliteWave,
        //     text: "Psychology buildup",
        //     description: " Psychology buildup is a trading technique that involves using psychological principles to predict market movements. It involves analysing the emotions and behaviours of market participants to identify potential market turning points."
        // },
        // {
        //     id: 8,
        //     image: eliteWave,
        //     text: "Advance Option Strategies",
        //     description: "Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile."
        // },
        // {
        //     id: 9,
        //     image: priceAction,
        //     text: "Advance Option Strategies",
        //     description: "Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile."
        // },
        // {
        //     id: 10,
        //     image: priceAction,
        //     text: "Advance Option Strategies",
        //     description: "Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile."
        // },
        // {
        //     id: 11,
        //     image: priceAction,
        //     text: "Advance Option Strategies",
        //     description: "Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile."
        // }

        { text: "Time Cycle", image: clock, details: time, description: 'Time cycle is a trading tool used to predict future price movements based on past market cycles. It involves analysing the time periods between major market movements and using this information to forecast when the next major market move will occur.' },
        { text: "Astro Cycle", image: globe, details: astro, description: 'Astro cycle is a trading technique that uses astrology to predict future market movements. It involves analyzing the positions of planets and stars to identify potential market turning points.' },
        { text: "WD Gann Methods", image: books, details: gann, description: 'WD Gann was a trader who developed a set of trading methods based on geometric patterns, time cycles, and price levels. These methods involve using mathematical formulas and ratios to predict future market movements.' },
        {text:"Date Cycles", image:calender},
        { text: "Dynamic & Static Levels", image: bars, details: dynamicAndStatic, description: 'Dynamic and static levels are price levels that act as support and resistance levels in the market. Dynamic levels change with market movements, while static levels remain fixed over time.' },
        { text: "Advance Option Strategies", image: options, details: advanceOptionStrategies, description: 'Advance option strategies are trading strategies that involve the use of options contracts to hedge against market risk or generate income. These strategies involve combining different options contracts to create a customised risk profile.' },
        { text: "Master of Price Action", image: priceAction,details: masterofPrice, description: 'Master of price action is a trading philosophy that emphasises the importance of understanding price movements and patterns in the market. It involves analysing price charts and using this information to make trading decisions.' },
        { text: "Elliott Waves", image: eliteWave,details:elliotwaves, description: 'Elliott Waves is a technical analysis tool that involves analysing the waves of price movements in the market. It involves identifying patterns and using them to predict future market movements.' },
        { text: `Bigfoot Player Entries`, image: bigFoot,details:bigfoot, description: 'Bigfoot player entries are trading strategies that involve identifying the trading activity of institutional investors or "bigfoot" players. These strategies involve following the trades of these players and using this information to make trading decisions.' },
        { text: "Psychology buildup", image: physicology, details:Psychology ,description: 'Psychology buildup is a trading technique that involves using psychological principles to predict market movements. It involves analysing the emotions and behaviours of market participants to identify potential market turning points.' },
        { text: "Risk Management", image: riskManagement,details:Riskmanagement, description: 'Risk management is a crucial aspect of trading that involves managing and minimising market risk. It involves setting stop-loss orders, diversifying your portfolio, and using risk management tools to protect your investments.' },
    ];

    // const cause2 = [


    // ]


    const headerRef = useRef(null)
    const subHeaderRef = useRef(null)
    const reasonRef = useRef(null)
    const buttonRef = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(headerRef.current, {
            scale: 0
        }, {
            scale: 1,
            duration: 3,
            delay: 2
        })
        gsap.fromTo(subHeaderRef.current, {
            opacity: 0,
            top: -100
        }, {
            opacity: 1,
            duration: 1,
            top: 0,
            delay: 2.5
        })

        gsap.fromTo(reasonRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            delay: 1
        })

        gsap.fromTo(buttonRef.current, {
            // width: 0,
            opacity: 0,
        }, {
            opacity: 1,
            delay: 3,
            duration: 1
        })
    }, [])


    return (
        <header className='-z-10' id='header'>
            <h1 className='text-[38px] -z-10 relative lg:text-[107px] mt-20 lg:mt-0 font-black text-[#83FF8F] text-center mb-[5px] scale-100 drop-shadow-[0_0_6px_#83FF8F]' ref={headerRef}>
                GROWCIAL BULL
            </h1>
            <h6 className='text-white -z-10 font-light text-[18px] lg:text-[30px] tracking-[0.3em] text-center relative drop-shadow-[0_0_6px_#fff]' ref={subHeaderRef}>
                LEARN, GAIN & GROW
            </h6>
            <div className='text-center mt-[38px] lg:mb-[100px] relative z-1 mx-auto'>
                <a href="https://chat.whatsapp.com/LYZFkiXpuJTF0J5Cxh9lSW" className='px-[18px] py-[11px] text-[12px] lg:text-[22px] text-[#83FF8FC9] rounded-full drop-shadow-[0_0_6px_#83FF8FB2] border-[1px] tracking-[0.3em] border-[#83FF8FB2] focus:text-white hover:drop-shadow-[0_0_0_#fff] focus:bg-[#83FF8F69] transition opacity-0' target='_blank' rel='noreferrer' ref={buttonRef}>Join  Community</a>
            </div>

            <div className='mt-[28px] lg:mt-[100px] flex flex-col lg:flex-row lg:px-[116px] items-center relative' ref={reasonRef}>
                <div className='w-11/12 lg:w-5/12 lg:text-left'>
                    <h1 className='text-[22px] lg:text-[38px] font-black'>
                        Why Choose <span className='text-[#83FF8F]'>Growcial Bull</span> for  Trading Success
                    </h1>

                    <p className='font-medium text-[15px] lg:text-[20px] mb-9 lg:w-full w-10/12 ml-auto lg:ml-0 bg-[#07072480] lg:bg-transparent px-[14px] lg:p-0 py-[20px]'>
                        {length === text.length / 2 ? <>{text.slice(0, length)}...</> : text.slice(0, length)}
                        <div className="lg:hidden gap-x-3 flex w-fit ml-auto">
                            <button onClick={() => {
                                length === text.length / 2 ? setLength(text.length) : setLength(text.length / 2)
                            }
                            }>
                                {/* <img src="" alt="" /> */}
                                {length === text.length / 2 ? <img src={greenArrow} className='w-[18px] h-auto' alt="" /> : <img src={greenArrow} className='w-[18px] h-auto rotate-180' alt="" />}
                            </button>
                        </div>
                    </p>
                    <div className="lg:flex gap-x-3 hidden">
                        <button onClick={() => {
                            length === text.length / 2 ? setLength(text.length) : setLength(text.length / 2)
                        }
                        } className='text-white px-[19px] py-[7px] rounded-full font-medium bg-[#D9D9D90F] border-[1px] border-[#83FF8F]'>
                            {length === text.length / 2 ? 'more...' : 'less.'}
                        </button>
                    </div>


                </div>
                <div className='w-11/12 lg:w-7/12 mt-5 lg:mt-0 text-white overflow-visible'>
                    <OwlCarousel className='owl-theme' items={1} autoplay={false} loop>
                        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item">
                            {causes.map(({ image, text }) => <Cause img={image} title={text} />)}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item">
                            {causes.map(({ image, text }) => <Cause img={image} title={text} />)}
                        </div> */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item overflow-visible">
                            {causes.slice(0, 6).map(({ image, text, details }, id) => <Cause img={image} title={text} details={details} id={id} />)}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 w-full lg:pl-[80px] item overflow-visible">
                            {causes.slice(6, causes.length).map(({ image, text, details }, id) => <Cause img={image} title={text} details={details} id={id} />)}
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <Charts />
            {/* {headerDetailsView && <HeaderDetails item={causes[headerDetails]} setHeaderDetailsView={setHeaderDetailsView} />} */}
        </header>
    );
};

export default Header;