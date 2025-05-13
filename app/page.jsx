'use client'
import React, {useState} from 'react';
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import LemonSpring from "@components/Home/lemonSpring";
import DreamscapeSerenity from "@components/Home/DreamscapeSerenity";
import VibranceUnveiled from "@components/Home/VibranceUnveiled";
import RetroRadiance from "@components/Home/RetroRadiance";
import Form from "@components/Form";
import Profile from "@components/Profile";


const Page = () => {

    const [hoveredPhone, setHoveredPhone] = useState(null)
    const [hoveredFlower, setHoveredFlower] = useState(null)
    const isMediumScreen = useMediaQuery("(min-width: 768px)");


    return (
        <div className='w-full h-full'>
            <section className='w-full h-screen flex items-center justify-center md:justify-start mb-[100px]'>
                <div className='custom-container px-3 text-center md:pl-25 md:text-left relative '>
                    <div>
                        <h1 className='text-[clamp(60px,10vw,150px)] leading-tight font-light gsap'>Jasper Lane <br/> Visual
                            Storyteller <br/> & Photographer</h1>
                    </div>
                    <div className='w-[15%] aspect-square absolute top-5 right-0 md:right-[10%]'>
                        <Image
                            src={'/assets/phoneIcon.png'}
                            alt={'phone'}
                            fill
                            className={`${isMediumScreen && hoveredPhone ? 'opacity-0' : 'opacity-100'} transition-all duration-400`}
                            onMouseEnter={() => setHoveredPhone(true)}
                            onMouseLeave={() => setHoveredPhone(null)}
                        />

                    </div>
                    <div className='w-[15%] aspect-square absolute -top-3 right-0 md:right-[10%]'>
                        <Image
                            src={'/assets/phone.png'}
                            alt={'phone'}
                            width={140}
                            height={140}
                            className={`${isMediumScreen && hoveredPhone ? 'opacity-100' : 'opacity-0'} transition-all duration-400`}
                            onMouseEnter={() => setHoveredPhone(true)}
                            onMouseLeave={() =>  setHoveredPhone(null)}
                        />
                    </div>
                    <div className='w-[15%] aspect-square absolute -bottom-14 left-[28%] md:-bottom-31'>
                        <Image
                            src={'/assets/flowerIcon.png'}
                            alt={'phone'}
                            width={110}
                            height={110}
                            className={`${isMediumScreen && hoveredFlower ? 'opacity-0' : 'opacity-100'} transition-all duration-400`}
                            onMouseEnter={() => setHoveredFlower(true)}
                            onMouseLeave={() => setHoveredFlower(null)}
                        />
                    </div>
                    <div className='w-[15%] aspect-square absolute -bottom-17 left-[28%] md:-bottom-33'>
                        <Image
                            src={'/assets/flowers.svg'}
                            alt={'phone'}
                            width={130}
                            height={130}
                            className={`${isMediumScreen && hoveredFlower ? 'opacity-100' : 'opacity-0'} transition-all duration-400`}
                            onMouseEnter={() => setHoveredFlower(true)}
                            onMouseLeave={() => setHoveredFlower(null)}
                        />
                    </div>
                </div>
            </section>

            <Profile
                title={'Every Frame Holds a Story'}
                description={'I’m a visual storyteller and photographer, capturing fleeting moments that speak without words. Based in San Francisco, I turn moments into timeless stories that resonate long after they’re seen.'}
                button={true}
                className={'h-[120vh]'}
            />

            <section className='w-full min-h-screen mb-[100px] flex flex-col'>
                <div className='text-center pt-15 md:pt-0 mb-15 md:mb-28 gsapCon'>
                    <h1 className='text-[clamp(40px,4.5vw,75px)] gsap'>My Projects</h1>
                </div>
                <div className='w-full min-h-screen flex flex-col gap-20 md:gap-0'>
                    <LemonSpring/>
                    <DreamscapeSerenity/>
                    <VibranceUnveiled/>
                    <RetroRadiance/>
                </div>
            </section>

            <Form
                id="main-contact-form"
            />
        </div>

    );
};

export default Page;