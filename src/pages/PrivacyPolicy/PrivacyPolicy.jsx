import React from 'react';

const PrivacyPolicy = () => {
    const definitions = [
        {
            title: "Account",
            details: "means a unique account created for You to access our Service or parts of our Service."
        },
        {
            title: "Affiliate",
            details: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
        },
        {
            title: "Company",
            details: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Growcial Bull, Delhi.'
        },
        {
            title: "Cookies",
            details: 'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.            '
        },

    ]
    return (
        <div className=' px-5 lg:px-32'>
            <h1 className='text-[50px] lg:text-[70px] font-black text-center'>Privacy Policy for <br /> Growcial Bull</h1>
            <h6 className='text-[28px] font-medium'>Last updated: March 19, 2023</h6>

            <div className='text-[18px]'>
                <p>
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p>
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
                </p>
            </div>

            <h2 className='text-[40px] mt-10 font-bold text-center'>Interpretation and Definitions</h2>
            <h3 className='text-[32px] font-bold text-left'>Interpretation</h3>
            <p className='text-[18px]'>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className='text-[32px] font-bold text-left mt-5'>Definitions</h3>
            <p className='text-[18px]'>
                For the purposes of this Privacy Policy:
            </p>

            <ul className='ml-5 list-disc'>
                {definitions.map(({ title, details }, key) => <li className='text-[20px]' key={key}><span className='font-bold'>{title}</span> {details}</li>)}
            </ul>

        </div>
    );
};

export default PrivacyPolicy;