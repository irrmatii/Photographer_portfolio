'use client'
import React from 'react';
import Image from "@node_modules/next/image";
import Form from "@components/Form";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const RetroRadiancePage = () => {

    const isMediumScreen = useMediaQuery("(min-width: 768px)");

    useGSAP(() =>{
        if (isMediumScreen) {
            ScrollTrigger.create({
                trigger: '.triggerImg',
                start: "-10.5% top",
                endTrigger: ".gsapCon",
                end: "bottom bottom",
                pin: true,
            })
        }
    }, [isMediumScreen])



    return (
        <div className='w-full min-h-screen'>
            <section className='w-full min-h-screen pt-40 mb-[100px]'>
                <div className='custom-container'>
                    <div className='w-full text-center mb-15 md:mb-28 flex flex-col items-center gap-3'>
                        <h1 className='text-[clamp(40px,4.5vw,75px)]'>Retro Radiance</h1>
                        <div
                            className='w-[6%] max-w-[45px] min-w-[20px] aspect-square rounded-full bg-[#ef5b2b]'>

                        </div>
                        <div className='px-4 md:px-40 lg:px-68'>
                            <p className='text-[clamp(25px,2vw,50px)] leading-tight'>Glistening
                                lights, bold beats—where vintage flair meets disco dazzle.</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row min-h-screen gsapCon bg-[#ecd6eb]'>
                        <div className='w-full md:w-[50%] h-[90vh] relative triggerImg'>
                            <Image
                                src={'/assets/disco/pexels-koolshooters-6982603.jpg'}
                                alt={'Retro Radiance'}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div
                            className='w-full md:w-[50%] flex flex-col items-center justify-center gap-20 py-40 px-5'>
                            <div className='w-full h-[90vh] relative flex items-center justify-center'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6983026.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982481.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982606.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>


                    <div className='w-full flex flex-col gap-20 md:gap-0 md:flex-row min-h-screen bg-[#ecd6eb]'>
                        <div
                            className='w-full md:w-[50%] flex flex-col items-center gap-20 px-5 md:px-0 md:pt-40'>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982475.jpg'}
                                    alt={'Retro Radiance'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6983022.jpg'}
                                    alt={'Retro Radiance'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6983013.jpg'}
                                    alt={'Retro Radiance'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>

                        <div
                            className='w-full md:w-[50%] flex flex-col items-center justify-center gap-20 px-5'>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982607.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982504.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[51vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982563.jpg'}
                                    alt={'Retro Radiance'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[51vh] relative'>
                                <Image
                                    src={'/assets/disco/pexels-koolshooters-6982501.jpg'}
                                    alt={'Retro Radiance'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            <Form/>
        </div>
    );
};

export default RetroRadiancePage;