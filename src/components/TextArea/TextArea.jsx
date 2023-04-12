import React from 'react';

const TextArea = ({ className, placeholder, onChange, rows, name }) => {
    return <textarea className={className} placeholder={placeholder} onChange={onChange} name={name} rows={rows}></textarea>;
};

export default TextArea;