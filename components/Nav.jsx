'use client'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Nav = () => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null)

    const router = useRouter();
    const pathname = usePathname()

    const handleContactClick = () => {

        if (pathname === '/') {
            document.getElementById('main-contact-form').scrollIntoView({behavior: 'smooth'});
        } else {
            router.push('/');
            setTimeout(() => {
                document.getElementById('main-contact-form').scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };


    // Disable scroll when mobileNavOpen is true
    useEffect(() => {
        document.body.style.overflow = mobileNavOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileNavOpen]);

    return (
        <nav className='w-full h-[60px] px-2 sm:px-15 flex justify-center fixed top-0 bg-[#F4F1EB] z-50'>
            <div className="w-full custom-container flex items-center justify-between z-50">
                <Link href={'/'}>
                    <Image
                        src={'/assets/logo.svg'}
                        alt='logo'
                        width={160}
                        height={50}
                        className='object-contain'
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className='sm:flex hidden'>
                    <ul className="flex items-center gap-10">
                        <Link href={'/about'}
                              className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg'>
                            About
                        </Link>
                        <Link href={'/'}
                              className='montserrat hover:text-gray-700 hover:scale-105 hover:flex transition-all duration-200 inline-block font-medium text-md xl:text-lg relative'
                              onMouseEnter={() => setHoveredItem(true)}
                              onMouseLeave={() => setHoveredItem(null)}
                        >
                            Work
                        </Link>
                        <div className={`bg-[#F4F1EB] top-10 right-22 px-10 py-4 ${hoveredItem ? 'absolute' : 'hidden'}`}
                             onMouseEnter={() => setHoveredItem(true)}
                             onMouseLeave={() => setHoveredItem(null)}
                        >
                            <ul className='flex flex-col gap-2 '>
                                <Link href={'/work/lemon_spring'}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg relative'>
                                    Lemon Spring
                                </Link>
                                <Link href={'/work/dreamscape_serenity'}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg relative'>
                                    Dreamscape Serenity
                                </Link>
                                <Link href={'/work/vibrance_unveiled'}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg relative'>
                                    Vibrance Unveiled
                                </Link>
                                <Link href={'/work/retro_radiance'}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg relative'>
                                    Retro Radiance
                                </Link>
                            </ul>
                        </div>
                        <button className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg'
                                onClick={handleContactClick}
                        >
                            Contact
                        </button>
                       {/* <Link href={'/'}
                              className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-md xl:text-lg'>
                            Contact
                        </Link>*/}
                    </ul>
                </div>


                {/* Mobile Navigation */}
                <div className='sm:hidden flex relative'>
                    {!mobileNavOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                             onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        >
                            <path fill="none" stroke="#ef5b2b" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="1.5" d="M10 5h10M4 12h16M4 19h10" color="#ef5b2b"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"
                             onClick={() => {
                                 setMobileNavOpen(!mobileNavOpen);
                                 setHoveredItem(null)
                             }}
                        >
                            <path fill="none" stroke="#ef5b2b" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="4" d="m8 8l32 32M8 40L40 8"/>
                        </svg>
                    )}
                </div>
            </div>
            <div
                className={`sm:hidden flex justify-center w-full h-screen absolute bg-[#F4F1EB] ${mobileNavOpen ? 'top-15 transition-all duration-500 ease-in-out z-40' : '-top-250 md:-top-200 transition-all duration-500 ease-in-out'}`}>
                <ul className="flex flex-col items-center gap-5 pt-20">
                    <Link href={'/about'}
                          onClick={() => setMobileNavOpen(!mobileNavOpen)}
                          className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-2xl'>
                        About
                    </Link>

                    <div
                        className='w-full items-center montserrat font-medium text-2xl flex flex-col gap-4 relative'>
                        <div className='flex items-center gap-5 ml-10 hover:text-gray-700 hover:scale-105 transition-all duration-200'
                             onClick={() => setHoveredItem(!hoveredItem)}>
                            Work
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-[#0D53BA]  hover:fill-gray-700'>
                                <path
                                      d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"/>
                            </svg>
                        </div>

                        <div className={`w-full ${hoveredItem ? 'flex items-center justify-center' : 'hidden'}`}>
                            <ul className='flex flex-col items-center justify-center gap-2 '>
                                <Link href={'/work/lemon_spring'}
                                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-xl relative'>
                                    Lemon Spring
                                </Link>
                                <Link href={'/work/dreamscape_serenity'}
                                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-xl relative'>
                                    Dreamscape Serenity
                                </Link>
                                <Link href={'/work/vibrance_unveiled'}
                                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-xl relative'>
                                    Vibrance Unveiled
                                </Link>
                                <Link href={'/work/retro_radiance'}
                                      onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                      className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-xl relative'>
                                    Retro Radiance
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <Link href={'/'}
                          onClick={() => setMobileNavOpen(!mobileNavOpen)}
                          className='montserrat hover:text-gray-700 hover:scale-105 transition-all duration-200 inline-block font-medium text-2xl'>
                        Contact
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;