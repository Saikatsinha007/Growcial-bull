import React from 'react';

const InputField = ({ type, className, labelClassName, placeholder, onChange, id, label, name }) => {
    return <>
        <label className={labelClassName} htmlFor={id}>{label}</label>
        <input
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
        />
    </>;
};

export default InputField;