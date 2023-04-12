import React, { useEffect, useRef, useState } from 'react';
import activeIcon from "./../../assets/active-icon.png"
import Hamburger from '../Hamburger/Hamburger';
import gsap from 'gsap';
// import { NavLink } from 'react-router-dom';
import logo from './../../assets/logo.png'
import { isInViewport } from '../../checkIsInViewPort';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ setEnrollVisible }) => {
      const [hamcheck, setHamCheck] = useState(false);
      // const [activeItem, setActiveItem] = useState('header')
      const activeIconRef = useRef(null);
      const phoneNavRef = useRef(null)
      const location = useLocation()

      useEffect(() => {
            // gsap.fromTo(activeIconRef.current, {
            //       opacity: 0,
            //       delay: 1
            // }, {
            //       opacity: 1,
            // })

            gsap.to(activeIconRef.current, {
                  left: document.getElementById('home').getBoundingClientRect().left - 25,
                  opacity: 1,
                  delay: 1,
                  duration: 0.5
            })

            gsap.to(phoneNavRef.current, {
                  // left: document.getElementById('home').getBoundingClientRect().left - 25,
                  opacity: 1,
                  duration: 0.5
            })
      }, [])

      // window.addEventListener('scroll', () => {
      //       if (isInViewport('about-us')) {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('home').getBoundingClientRect().left - 25,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })
      //             // console.log('header');
      //       }
      //       else if (isInViewport('services')) {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('about').getBoundingClientRect().left - 8,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })
      //             // console.log('about');
      //       }

      //       else if (isInViewport('facts')) {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('services-nav').getBoundingClientRect().left - 8,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })
      //             // console.log('plans');
      //       }
      //       else if (isInViewport('blogs')) {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('our-facts').getBoundingClientRect().left - 10,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })
      //             // console.log('facts');
      //       }


      //       else if (isInViewport('contact')) {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('blogs-section').getBoundingClientRect().left - 28,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })
      //             // console.log('blogs');
      //       }

      //       else {
      //             gsap.to(activeIconRef.current, {
      //                   left: document.getElementById('contact-us').getBoundingClientRect().left - 14,
      //                   opacity: 1,
      //                   duration: 0.5
      //             })

      //             // console.log('contact');
      //       }

      // })
      const [active, setActive] = useState(false)
      const navLeft = useRef(null)
      const navRight = useRef(null)

      useEffect(() => {
            gsap.fromTo(navLeft.current, {
                  left: '-50vw'
            }, {
                  left: 0,
                  duration: 1
            })

            gsap.fromTo(navRight.current, {
                  right: '-50vw'
            }, {
                  right: 0,
                  duration: 1
            })
      }, [])

      // if (typeof(stockdio_events) == "undefined") {
      //       stockdio_events = true;
      //       var stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      //       var stockdio_eventer = window[stockdio_eventMethod];
      //       var stockdio_messageEvent = stockdio_eventMethod == "attachEvent" ? "onmessage" : "message";
      //       stockdio_eventer(stockdio_messageEvent, function (e) {
      //          if (typeof(e.data) != "undefined" && typeof(e.data.method) != "undefined") {
      //             eval(e.data.method);
      //          }
      //       },false);
      //    }

      return (
            <> 
            <div ><iframe id='st_3019f2ee4f3a4b2d992b91a49ac32e9c' frameBorder='0' scrolling='no' width='100%' height='0%' src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=01917EBFE19345F4AE4DC59617B4BBE6&stockExchange=NSE&symbols=SBIN;LT;ICICIBANK;RELIANCE;HINDALCO&palette=Financial-Light&layoutType=15&onload=st_3019f2ee4f3a4b2d992b91a49ac32e9c'></iframe></div>
            <div className='flex justify-between items-center px-3 lg:px-[80px] lg:py-[1px]' id='navbar'>
           
                  <NavLink to='/' className='w-1/4 lg:w-1/12 relative' ref={navLeft}>
                  
                        <img className='' src={logo} alt="" />
                  </NavLink>
                 
                  <nav className='z-50 w-11/12 relative' ref={navRight}>
                 
                  <ul className='lg:flex justify-end hidden' onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('home').getBoundingClientRect().left - 250,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#top" id='home'>Home</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('about').getBoundingClientRect().left - 238,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#about-us" id='about'>About Us</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('services-nav').getBoundingClientRect().left - 238,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#services" id='services-nav'>Our plans</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('our-facts').getBoundingClientRect().left - 238,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#facts" id='our-facts'>Our facts</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('blogs-section').getBoundingClientRect().left - 250,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#blogs" id='blogs-section'>Blogs</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('referral-section').getBoundingClientRect().left - 245,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#referral" id='referral-section'>Referral</a>
                              </li>
                              <li className='px-[40px] text-[#8383FFC4] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          setActive(true)
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('contact-us').getBoundingClientRect().left - 235,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#contact" id='contact-us'>Contact</a>
                              </li>
                        </ul>

                        {active && <img src={activeIcon} alt="active-icon" id='activeicon' className='absolute w-[100px] h-auto bottom-18 hidden lg:block opacity-0' ref={activeIconRef} />}
                  </nav>
                  <div className='lg:hidden fixed top-0 right-2 z-[999] cursor-pointer'>
                        <Hamburger hamcheck={hamcheck} setHamCheck={setHamCheck} />
                  </div>
                  <nav className='fixed top-0 z-10 w-full left-0'>
                        {hamcheck && <ul className='lg:hidden justify-end w-screen h-screen backdrop-blur pt-10' ref={phoneNavRef}>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('home').getBoundingClientRect().left - 25,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#top" id='home'>Home</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('about').getBoundingClientRect().left - 8,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#about-us" id='about'>About Us</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('services-nav').getBoundingClientRect().left - 8,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#services" id='services-nav'>Our plans</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('our-facts').getBoundingClientRect().left - 8,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#facts" id='our-facts'>Our facts</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('blogs-section').getBoundingClientRect().left - 30,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#blogs" id='blogs-section'>Blogs</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('referral-section').getBoundingClientRect().left - 8,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#referral" id='referral-section'>Referral</a>
                              </li>
                              <li className='px-[10px] py-[20px] text-[#fff] text-[18px] font-medium'
                                    onMouseEnter={() => {
                                          gsap.to(activeIconRef.current, {
                                                left: document.getElementById('contact-us').getBoundingClientRect().left - 8,
                                                opacity: 1,
                                                duration: 0.5
                                          })
                                    }}
                              >
                                    <a href="/#contact" id='contact-us'>Contact</a>
                              </li>
                        </ul>}
                  </nav>
            </div>
            </>
      );
};

export default Navbar;