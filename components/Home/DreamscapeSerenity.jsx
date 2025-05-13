import React from 'react';
import Link from "@node_modules/next/link";

const DreamscapeSerenity = () => {
    return (
        <section className="w-full h-screen relative overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center"
                 style={{ backgroundImage: "url('/assets/clouds/pexels-ron-lach-8262597.jpg')" }}>
            <div className='h-full flex flex-col gap-15 justify-end xl:justify-center'>
                <div className='px-10 xl:px-20 w-full max-w-[580px] text-center'>
                    <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-gray-950 font-light gsap'>Dreamscape
                        Serenity</h1>
                </div>
                <div className='pb-20 px-10 xl:px-20 w-full max-w-[580px] flex flex-col gap-10 text-center'>
                    <p className='text-gray-950 text-[clamp(25px,2vw,50px)] leading-tight font-medium gsap'>Drift
                        away in a celestial embrace where
                        soft clouds
                        cradle beauty, and serenity feels infinite.</p>
                    <Link href={'/work/dreamscape_serenity'}
                          className='montserrat text-gray-950 text-md cursor-pointer gsap'
                    >
                        See Project {'>>'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DreamscapeSerenity;