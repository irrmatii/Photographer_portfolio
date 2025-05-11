"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const Button = ({value, navigate}) => {

    const router = useRouter(); // Use useRouter instead of useNavigate

    function navigateToProfile(navigate) {
        router.push(navigate); // Use router.push() for navigation
    }

    return (
        <button className='text-[clamp(25px,1.6vw,30px)] border font-bold border-[#ef5b2b] rounded-full px-3 w-[20%] min-w-[110px] hover:bg-[rgba(239,91,43,0.75)] transition-color duration-500 ease-in-out'
                onClick={navigate ? () => navigateToProfile(navigate) : undefined}
        >
            {value}
        </button>
    );
};

export default Button;