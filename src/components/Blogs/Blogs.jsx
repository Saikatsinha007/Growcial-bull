import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contents } from '../../Blogscontent';
import Blog from '../Blog/Blog';


const Blogs = () => {
    const location = useLocation();
    const blogs = location.pathname === '/' ? contents.slice(0, 4) : contents;

    return (
        <div className='py-[50px] lg:pt-[110px] lg:pb-[222px] px-[20px] lg:px-[116px] overflow-x-hidden' id='blogs'>
            <h1 className='text-[22px] text-right lg:text-left lg:text-[68px] text-[#83FF8F] drop-shadow-[0_0_5px] font-bold font-["Poppins sans-serif"]'>Blogs</h1>
            <h6 className='font-["Poppins sans-serif"] text-right lg:text-left text-[13px] lg:text-[24px] opacity-60'>Read Blogs that will inspire and educate you to earn money !!</h6>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-x-[296px] mt-[70px]">
                {blogs.map(({ _id, heading, image, text, link }) => <Blog id={_id} key={_id} heading={heading} image={image} text={text} link={link} />)}
            </div>

            {location.pathname === '/' && <div className="text-center mt-[86px]">
                <Link to="/blogs" className="text-[#fff] border border-[#83FF8F] px-[24px] py-[18px] rounded-full hover:bg-[#83FF8F] hover:text-black transition-all">Read more blogs &rarr;</Link>
            </div>}
        </div>
    );
};

export default Blogs;