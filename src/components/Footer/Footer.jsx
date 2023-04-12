import React from 'react';
import logo from './../../assets/footer-logo.png';
import insta from "./../../assets/icons/instagrm-stroke.png"
import telegram from "./../../assets/icons/telegram-fill.png"
import facebook from "./../../assets/icons/facebook.png"
import location from './../../assets/pin-drop.png'
import phone from './../../assets/phone.png'
import email from './../../assets/email.png'
import { Link, NavLink } from 'react-router-dom';
import arrow from './../../assets/green-arrow.png'
// import Social from '../Social/Social';
// import facebook from "./../../assets/icons/facebook.png"
// import insta from "./../../assets/icons/instagrm-stroke.png"
// import telegram from "./../../assets/icons/telegram-fill.png"
import bg from './../../assets/circle-bg.png'

const Footer = () => {
    return (
        <>
            <div className='relative hidden lg:block'>
                <footer className='bg-[#050520] flex flex-col lg:flex-row lg:items-center lg:justify-center px-[20px] lg:px-[62px] text-[15px]'>
                    <aside className='lg:w-5/12'>
                        <img src={logo} alt="footer-logo" className='w-1/2' />
                    </aside>
                    <aside className='lg:w-7/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[20px]'>Explore</h2>
                            <ul>
                                <li className='mb-[20px] text-[#83FF8F]'>
                                    <a href="#about-us">About Us</a>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F]'>Blogs</li>
                                <li className='mb-[20px] text-[#83FF8F]'>
                                    <a href="#services">Our Plans</a>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F]'>Referral</li>
                            </ul>
                        </aside>

                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[20px]'>Resource</h2>
                            <ul>
                                <li className='mb-[20px] text-[#83FF8F]'>
                                    <a href="#testimonials">Testimonial</a>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F]'>Disclaimer</li>
                                {/* <li className='mb-[20px] text-[#83FF8F]'>Contact</li> */}
                                <li className='mb-[20px] text-[#83FF8F]'>
                                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                                </li>
                            </ul>
                        </aside>

                        <aside className='hidden lg:block'>
                            <h2 className='font-black text-[#8383FF] mb-[20px]'>Address</h2>
                            <ul>
                                <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                    <img className='w-[8px] h-[12px]' src={location} alt="" />
                                    <p>748 Pocket-P 5th Floor <br />
                                        sector 40, Gurgaon 122022</p>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                    <img className='w-[8px] h-[12px]' src={phone} alt="" />
                                    <a href='tel:+91 99996-31995'>+91 99996-31995</a>
                                </li>
                                <li className='mb-[20px] text-[#83FF8F] flex items-center gap-4'>
                                    <img className='w-[10px] h-[9px]' src={email} alt="" />
                                    <a href="mailto:Info@growcialbull.com">Info@growcialbull.com</a>
                                </li>
                                <li>
                                    <div className="flex items-center gap-[25px]" id='social'>
                                        <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                            <img className='drop-shadow-[0_0_4px_#83ff8f] w-[14px] hover:scale-150 transition' src={insta} alt="" />
                                        </a>
                                        <a href="https://t.me/growcialbull" target='_blank' rel='noreferrer'>
                                            <img className='drop-shadow-[0_0_4px_#83ff8f] w-[18px] hover:scale-150 transition' src={telegram} alt="" />
                                        </a>
                                        <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                            <img className='drop-shadow-[0_0_4px_#83ff8f] w-[8px] hover:scale-150 transition' src={facebook} alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                    </aside>
                </footer>
                <div className='mt-10 lg:mt-[4px] pb-20'>
                    <h5 className='text-[#8383FF] font-bold text-center'>Subscribe to Our Newsletter</h5>
                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0 lg:justify-center lg:px-[124px] mt-[15px]">
                        <p className='w-11/12 lg:w-1/3 mx-auto text-[#8383FF] font-medium'>
                            © 2021-2023 <span className='font-black'>GROWCIAL BULL</span>. All rights reserved.
                        </p>
                        <form className='flex items-center gap-[15px] w-1/3 justify-center'>
                            <input type="text" className='border-[2px] border-[#8383FF] px-[16px] py-[8px] bg-[#FFFFFF21] rounded-full focus:outline-0' placeholder='Email' />
                            <button className='bg-[#8383FF] px-[16px] py-[6px] rounded-full'>Subscribe</button>
                        </form>
                        <a href="/terms" className='text-[#8383FF] text-[16px] inline-block lg:w-1/3 text-right'>
                            Terms & conditions
                        </a>
                    </div>
                </div>

                <a href="#top">
                    <img src={arrow} className='absolute bottom-[137px] right-[61px] rotate-180 w-[32px]' alt="arrow" />
                </a>
            </div>

            <div id='footer-phone'>
                <footer className='lg:hidden relative bg-[#05052061]'>
                    <img src={logo} className='w-2/3 mx-auto' alt="" />
                    <h5 className='text-[#8383FF] font-bold text-center mt-[8px] text-[18px]'>Subscribe to Our Newsletter</h5>
                    <form className='flex items-center gap-[12.5px] justify-center mb-[38px] mt-[11px]'>
                        <input type="text" className='border-[1px] border-[#8383FF] px-[15px] py-[10px] bg-[#FFFFFF21] rounded-full focus:outline-0 text-[8px] font-semibold w-7/12' placeholder='Email' />
                        <button className='bg-[#8383FF] px-[22px] py-[6px] rounded-full text-[12px] font-semibold'>Subscribe</button>
                    </form>

                    <div className="flex gap-[89px] px-[68px] text-[12px] font-light justify-center">
                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[18px]'>Explore</h2>
                            <ul className='list-disc'>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <a href="#about-us">About Us</a>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>Blogs</li>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <a href="#services">Our Plans</a>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>Referral</li>
                            </ul>
                        </aside>

                        <aside>
                            <h2 className='font-black text-[#8383FF] mb-[18px]'>Resource</h2>
                            <ul className='list-disc'>
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <a href="#testimonials">Testimonial</a>
                                </li>
                                <li className='mb-[7px] text-[#83FF8F]'>Disclaimer</li>
                                {/* <li className='mb-[7px] text-[#83FF8F]'>Contact</li> */}
                                <li className='mb-[7px] text-[#83FF8F]'>
                                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                                </li>
                            </ul>
                        </aside>
                    </div>


                    <a href="#top">
                        <img src={arrow} className='absolute bottom-[55.21px] right-[23.82px] rotate-180 w-[32px]' alt="arrow" />
                    </a>
                    {/* <Social /> */}
                    <div className="flex items-center justify-center gap-[80px] mt-[55px]" id='social'>
                        <div className="flex items-center gap-[25px]" id='social'>
                            <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[14px] hover:scale-150 transition' src={insta} alt="" />
                            </a>
                            <a href="https://t.me/growcialbull" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[18px] hover:scale-150 transition' src={telegram} alt="" />
                            </a>
                            <a href="https://instagram.com/growcialbull?igshid=ZDdkNTZiNTM=" target='_blank' rel='noreferrer'>
                                <img className='drop-shadow-[0_0_4px_#83ff8f] w-[8px] hover:scale-150 transition' src={facebook} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between px-[5px] text-[#8383ff] text-[7px] mt-[26px]">
                        <p>
                            © 2021-2023 <span className='font-medium'>GROWCIAL BULL</span>. All rights reserved.
                        </p>
                        <p>
                            <a href='https://boomingbulls.com/terms-conditions/'>Terms & conditions</a>
                        </p>
                    </div>

                    <div className='h-[1px] w-screen bg-[#83FF8F] mt-[9px] mb-2'></div>
                </footer>
            </div>
        </>
    );
};

export default Footer;