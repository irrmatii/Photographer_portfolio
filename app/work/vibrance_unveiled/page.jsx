'use client'
import React from 'react';
import Image from "@node_modules/next/image";
import Form from "@components/Form";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger, SplitText);

const VibranceUnveiledPage = () => {

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

        let gsapElement = document.querySelectorAll(".gsap")

        gsapElement.forEach((g) => {
            const split = SplitText.create(g, {
                type: 'words, lines'
            });

            gsap.from(split.lines, {
                y: 100,
                autoAlpha: 0,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: g,
                    start: "top 85%",
                    end: "bottom 40%"
                }
            });
        });

    }, [isMediumScreen])


    return (
        <div className='w-full min-h-screen'>
            <section className='w-full min-h-screen pt-40 mb-[100px]'>
                <div className='custom-container'>
                    <div className='w-full text-center mb-15 md:mb-28 flex flex-col items-center gap-8'>
                        <h1 className='text-[clamp(40px,4.5vw,75px)] gsap'>Vibrance Unveiled</h1>
                        <div
                            className='w-[6%] max-w-[45px] min-w-[20px] aspect-square rounded-full bg-[#ef5b2b]'>

                        </div>
                        <div className='px-4 md:px-40 lg:px-68'>
                            <p className='text-[clamp(25px,2vw,50px)] leading-tight gsap'>Bold, sophisticated costumes burst with color, turning every frame into a statement of style and confidence. Each shot radiates elegance, where striking hues meet timeless class. </p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row min-h-screen gsapCon'>
                        <div className='w-full md:w-[40%] h-[90vh] relative triggerImg'>
                            <Image
                                src={'/assets/suits/pexels-cottonbro-10548130.jpg'}
                                alt={'Vibrance Unveiled'}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div
                            className='w-full md:w-[60%] flex flex-col items-center justify-center py-40 px-5 md:px-15'>
                            <div className='w-full h-[40vh] md:h-[90vh] relative'>
                                <Image
                                    src={'/assets/suits/pexels-cottonbro-10547937.jpg'}
                                    alt={'Vibrance Unveiled'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[40vh] md:h-[90vh] relative'>
                                <Image
                                    src={'/assets/suits/pexels-cottonbro-10547933.jpg'}
                                    alt={'Vibrance Unveiled'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[40vh] md:h-[90vh] relative'>
                                <Image
                                    src={'/assets/suits/pexels-cottonbro-10547288.jpg'}
                                    alt={'Vibrance Unveiled'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className='w-full flex flex-col items-center gap-3 md:flex-row md:justify-around py-10'>
                        <div className='relative'>
                            <Image
                                src={'/assets/suits/pexels-cottonbro-9834553.jpg'}
                                alt={'Vibrance Unveiled'}
                                width={550}
                                height={550}
                            />
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center gap-3'>
                            <div className='relative'>
                                <Image
                                    src={'/assets/suits/pexels-cottonbro-9834556.jpg'}
                                    alt={'Vibrance Unveiled'}
                                    width={700}
                                    height={700}
                                />
                            </div>
                            <div className='relative'>
                                <Image
                                    src={'/assets/suits/pexels-cottonbro-9834889.jpg'}
                                    alt={'Vibrance Unveiled'}
                                    width={550}
                                    height={550}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className='w-full flex flex-col-reverse gap-3 md:flex-row md:gap-0 pt-10'>
                        <div className='relative w-full h-[60vh] md:w-[60%] md:h-[90vh]'>
                            <Image
                                src={'/assets/suits/pexels-cottonbro-10669638.jpg'}
                                alt={'Vibrance Unveiled'}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='relative w-full h-[70vh] md:w-[40%] md:h-[90vh]'>
                            <Image
                                src={'/assets/suits/pexels-cottonbro-9168236.jpg'}
                                alt={'Vibrance Unveiled'}
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>

                </div>

            </section>
            <Form/>
        </div>
    );
};

export default VibranceUnveiledPage;