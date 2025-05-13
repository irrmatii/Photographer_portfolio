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

const DreamscapeSerenityPage = () => {

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
                        <h1 className='text-[clamp(40px,4.5vw,75px)] gsap'>Dreamscape Serenity</h1>
                        <div
                            className='w-[6%] max-w-[45px] min-w-[20px] aspect-square rounded-full bg-[#ef5b2b]'>

                        </div>
                        <div className='px-4 md:px-40 lg:px-68'>
                            <p className='text-[clamp(25px,2vw,50px)] leading-tight gsap'>A serene escape above the clouds—soft light, gentle mists, and endless skies. This collection captures calm moments where everything feels peaceful and infinite.</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row min-h-screen bg-gray-200 gsapCon'>
                        <div className='w-full md:w-[50%] h-[90vh] relative triggerImg'>
                            <Image
                                src={'/assets/clouds/pexels-evie-shaffer-1259279-19907992.jpg'}
                                alt={'Dreamscape Serenity'}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='w-full md:w-[50%] flex flex-col items-center justify-center gap-20 py-40 px-5 md:px-0'>
                            <div className='w-full h-[70vh] md:h-[90vh] relative flex items-center justify-center'>
                                <Image
                                    src={'/assets/clouds/pexels-ron-lach-8263050.jpg'}
                                    alt={'Dreamscape Serenity'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[70vh] md:h-[90vh] relative'>
                                <Image
                                    src={'/assets/clouds/pexels-ron-lach-8262600.jpg'}
                                    alt={'Dreamscape Serenity'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[70vh] md:h-[90vh] relative'>
                                <Image
                                    src={'/assets/clouds/pexels-ron-lach-8264254.jpg'}
                                    alt={'Dreamscape Serenity'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center gap-10 md:flex-row md:justify-around bg-gray-200 py-10'>
                        <div className='relative'>
                            <Image
                                src={'/assets/clouds/pexels-ron-lach-8262597.jpg'}
                                alt={'Dreamscape Serenity'}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className='relative'>
                            <Image
                                src={'/assets/clouds/pexels-ron-lach-8262604.jpg'}
                                alt={'Dreamscape Serenity'}
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    <div className='w-full flex justify-center bg-gray-200'>
                        <div className='relative'>
                            <Image
                                src={'/assets/clouds/pexels-ron-lach-8264240.jpg'}
                                alt={'Dreamscape Serenity'}
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center gap-10 md:flex-row md:justify-around md:items-end bg-gray-200 pt-10'>
                        <div className='relative'>
                            <Image
                                src={'/assets/clouds/pexels-ron-lach-8264238.jpg'}
                                alt={'Dreamscape Serenity'}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='relative'>
                            <Image
                                src={'/assets/clouds/pexels-ron-lach-8264236.jpg'}
                                alt={'Dreamscape Serenity'}
                                width={650}
                                height={650}
                            />
                        </div>
                    </div>

                </div>

            </section>
            <Form/>
        </div>
    );
};

export default DreamscapeSerenityPage;