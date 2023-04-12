import React from 'react';
import styles from "./Hamburger.module.css"

const Hamburger = ({ hamcheck, setHamCheck }) => {

    return (
        <div className="z-0 w-full h-full bg-white" onClick={() => document.getElementById("hamcheck").click()}>
            <div className='relative left-[-12vw] top-[3vh] sm:left-[-12vw] sm:top-[5vh]'>
                <input type="checkbox" className='hidden' id="hamcheck" onChange={e => setHamCheck(e.target.checked)} />
                <div className={`absolute top-0 w-10 h-1 bg-[#83FF8F] mt-2 opacity-100 ${styles.topbarDefault}`} id={hamcheck && styles.topbar}></div>
                <div className={`absolute top-2 w-10 h-1 bg-[#83FF8F] mt-2 ${hamcheck ? styles.middle : styles.middleDefault}`}></div>
                <div className={`absolute top-4 w-10 h-1 bg-[#83FF8F] mt-2 ${styles.bottomBarDefault}`} id={hamcheck && styles.bottomBar}></div>
            </div>
        </div>
    );
};

export default Hamburger;