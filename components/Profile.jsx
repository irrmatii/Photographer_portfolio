"use client"
import React from 'react';
import Button from "@components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(useGSAP,ScrollTrigger, SplitText);

const Profile = ({title, description, button, className}) => {

    useGSAP(() => {
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
    })

    const splitText = (text) => {
        return text.split("").map((char, index) => (
            <span key={index} className="char inline-block">{char}</span>
        ));
    };


    return (
        <section className={`w-full min-h-screen flex justify-center ${button && 'md:mb-[100px]'}  ${className}`}>
            <div className='custom-container w-full flex-grow flex items-center justify-center'>
                <div className='w-[85%] xl:w-full h-full bg_radial flex rounded-md items-center justify-center py-10 md:py-20'>
                    <div
                        className='w-[90%] max-w-[1100px] min-h-[80%] md:min-h-[65%] bg-[#F4F1EB] flex flex-col items-center pt-20 pb-10'>
                        <div className='text-center w-[80%] flex flex-col items-center gap-7'>
                            <h1 className='text-[clamp(40px,4.5vw,75px)] leading-tight gsap'>{title}</h1>
                            <div
                                className='w-[8%] max-w-[60px] min-w-[25px] aspect-square rounded-full bg-[#ef5b2b]'></div>
                            <div className='text-[clamp(25px,2vw,50px)] leading-tight mb-4 flex flex-col gap-4 font-medium'>
                                {description.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className='gsap'>
                                        {splitText(paragraph)}
                                    </p>
                                ))}
                            </div>

                            {button && (
                                <Button
                                    value='More'
                                    navigate="/about"
                                />
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;