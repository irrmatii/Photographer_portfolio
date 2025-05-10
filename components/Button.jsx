import React from 'react';

const Button = ({value, click}) => {
    return (
        <button className='text-[clamp(25px,2.5vw,30px)] border font-bold border-[#ef5b2b] rounded-full px-3 w-[20%] min-w-[110px] hover:bg-[rgba(239,91,43,0.75)] transition-color duration-500 ease-in-out'>
            {value}
        </button>
    );
};

export default Button;