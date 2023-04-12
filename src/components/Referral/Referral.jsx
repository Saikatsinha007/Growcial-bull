import React from 'react';
import bg from './../../assets/referral-bg.png'

const Referral = () => {
    return (
        <div id='referral'>
            <div className="relative h-auto ">
                <h1 className='text-[40px] lg:text-[80px] font-black text-[#83FF8F] left-0 right-0 mx-auto text-center blur-sm hidden lg:block absolute'>Referral</h1>
                <h1 className='text-[40px] lg:text-[80px] font-black text-[#83FF8F] left-0 right-0 mx-auto text-center'>Referral</h1>
            </div>

            <div className='py-[100px] lg:pt-[180px] lg:pb-[125px] xl:py-[200px] lg:mt-[70px] text-[#56FF6C] text-center bg-[length:120%] xl:bg-cover' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h1 className='text-[14px] lg:text-[28px] lg:mt-0 text-center font-medium'>Open Demat in Zerodha with our Referral link and </h1>
                <h1 className='text-[8px] lg:text-[28px] mt-[2px] mb-[13px] lg:my-10 text-center'>whatsapp (+91 9999-631995) your ID to get 10% Instant Discout on our all Plans or 10 Days free our standard services </h1>
                {/* <h1 className='text-[28px] mt-10 text-center'>Open Demat in Zerodha with our Referral link and </h1> */}
                <a href="https://zerodha.com/?c=NG6309&s=CONSOLE" className='text-[12px] lg:text-[18px] border-[2px] border-[#39FE50] focus:bg-[#83FF8F69] font-semibold px-[12px] py-[7px] lg:px-[40px] lg:py-[21px] rounded-full' target="_blank" rel='noreferrer'>Open Demat</a>
                {/* <h1 className='text-[28px] mt-10 text-center'>Open Demat in Zerodha with our Referral link and </h1> */}
            </div>

        </div>
    );
};

export default Referral;