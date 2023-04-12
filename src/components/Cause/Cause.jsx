import React, { useState } from 'react';

const Cause = ({ img, title, details, id }) => {
    const [shown, setShown] = useState(false);

    return (
        <div className='flex gap-[24px] items-center py-[25px] cursor-pointer relative' onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
            <img src={img} className="hover:scale-125 transition-all" alt={title} />
            <h2 className='text-[12px] lg:text-[15px] font-bold'>{title}</h2>
            {shown && <img className={`absolute ${id > 2 ? 'bottom-[-90px]' : 'top-[-70px]'} z-50`} src={details} alt="" />}
        </div>
    );
};

export default Cause;