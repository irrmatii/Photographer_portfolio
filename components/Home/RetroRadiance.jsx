import React from 'react';
import Image from "@node_modules/next/image";
import Link from "next/link";

const RetroRadiance = () => {
    return (
        <section
            className='w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center'>
            <div
                className='w-full md:w-[30%] md:h-[85%] bg-[#194a64] md:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] px-3 md:py-10 md:pr-15 md:pl-10 xl:pr-30 xl:pl-10 flex flex-col items-center md:justify-between'>
                <div
                    className='w-full md:pl-10 pt-10 xl:pl-33 text-center [text-shadow:0_0_15px_rgba(255,105,180,0.7)]'>
                    <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-[#ecd6eb] font-light gsap'>Retro
                        Radiance
                    </h1>
                </div>
                <div className='pt-20 pb-5 flex flex-col gap-10 text-center'>
                    <p className='text-[#ecd6eb] text-[clamp(25px,2vw,50px)] leading-tight font-medium [text-shadow:0_0_15px_rgba(255,105,180,0.7)] xl:pl-5 gsap'>Glistening
                        lights, bold beats—where vintage flair meets disco dazzle.</p>
                    <Link href={'/work/retro_radiance'}
                          className='montserrat text-[#ecd6eb] text-md cursor-pointer [text-shadow:0_0_15px_rgba(255,105,180,0.7)] gsap'
                    >
                        See Project {'>>'}
                    </Link>
                </div>
            </div>
            <Image
                src={'/assets/disco/pexels-koolshooters-6982481.jpg'}
                alt={'Retro Radiance'}
                width={400}
                height={400}
                className='w-full md:w-[30%] md:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] md:py-10 -z-10'
            />
            <Image
                src={'/assets/disco/pexels-koolshooters-6982606.jpg'}
                alt={'Retro Radiance'}
                width={400}
                height={400}
                className='w-full md:w-[30%] md:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] md:py-10 -z-10'
            />
        </section>
    );
};

export default RetroRadiance;