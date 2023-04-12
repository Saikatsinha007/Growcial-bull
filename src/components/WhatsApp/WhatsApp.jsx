import React from 'react';
import whatsapp from "./../../assets/icons/whatsapp.svg"

const WhatsApp = ({ number }) => {
    return (
        <a href={`https://wa.me/${number}`} target="_blank" rel='noreferrer'>
            <img src={whatsapp} className="w-12 rounded-full" alt="" />
        </a>
    );
};

export default WhatsApp;