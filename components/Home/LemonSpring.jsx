import React from 'react';
import Image from "@node_modules/next/image";
import Link from "next/link";


const LemonSpring = () => {

    return (
        <section className='w-full min-h-screen flex flex-col-reverse md:flex-row '>
            <div className='md:flex-1 w-full h-[90vh] md:h-auto relative -z-10 overflow-hidden'>
                <Image
                    src={'/assets/lemon/pexels-vlada-karpovich-8451973.jpg'}
                    alt={'lemon spring'}
                    fill
                    className='object-cover object-center'
                />
                <Image
                    src={'/assets/lemon/pexels-daria-liudnaya-8187694.jpg'}
                    alt={'lemon spring'}
                    width={300}
                    height={300}
                    className='z-10 w-[45%] min-w-[250px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 [clip-path:inset(0_0_0_0_round_30%_0%_0_0%)]'
                />
            </div>
            <div className='flex-1 bg-[#585c3f] flex flex-col justify-between gap-10 md:gap-0'>
                <div className='pl-0 md:pl-20 pt-10 flex justify-center md:block md:text-left'>
                    <h1 className='text-[clamp(50px,5vw,80px)] text-[#fffc75] font-light gsap'>Lemon</h1>
                    <h1 className='text-[clamp(50px,5vw,80px)] text-[#fffc75] font-light pl-5 md:pl-10 gsap'>Spring</h1>
                </div>
                <div className='px-20 pb-15 flex flex-col gap-10 text-center md:text-left'>
                    <p className='text-[#fffc75] text-[clamp(25px,2vw,50px)] leading-tight gsap'>A lively blend
                        of sunshine, citrus, and
                        blooms—spring’s vibrant kiss in every shot.
                    </p>
                     <Link href={'/work/lemon_spring'}
                           className='montserrat text-[#fffc75] text-md cursor-pointer gsap'>
                         See Project {'>>'}
                     </Link>
                </div>
            </div>
        </section>
    );
};

export default LemonSpring;