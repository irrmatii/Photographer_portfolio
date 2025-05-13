import React from 'react';
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const VibranceUnveiled = () => {

    return (
        <section className='w-full min-h-screen flex flex-col items-center md:flex-row relative'>
            <div className='mx-15 md:m-15 min-h-[80vh] w-[90%] md:w-[50%] flex items-center justify-center'>
                <div className='w-full h-[80vh] relative flex items-center justify-center'>
                    <Image
                        src={"/assets/suits/pexels-cottonbro-10547919.jpg"}
                        alt={'Vibrance Unveiled'}
                        fill
                        className='object-cover object-center -z-10'
                    />
                    <div
                        className='h-[55%] lg:h-[80%] w-[80%] lg:w-[60%] py-3 flex flex-col items-center justify-center gap-5 lg:gap-15 z-10 bg-[#849399] rounded-md'>
                        <div
                            className='px-10 xl:px-20 w-full max-w-[580px] text-center flex items-center justify-center'>
                            <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-gray-50 font-light gsap'>Vibrance
                                Unveiled</h1>
                        </div>
                        <div
                            className='pb-5 px-10 xl:px-20 w-full max-w-[580px] flex flex-col gap-10 text-center'>
                            <p className='text-gray-50 text-[clamp(25px,2vw,50px)] leading-tight font-medium gsap'>Bold
                                hues, tailored brilliance where color meets confidence in every frame.</p>
                            <Link href={'/work/vibrance_unveiled'}
                                  className='montserrat text-gray-50 text-md cursor-pointer gsap'
                            >
                                See Project {'>>'}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-[50%] min-h-screen lg:h-[120vh] relative'>
                <Image
                    src={"/assets/suits/pexels-cottonbro-10548130.jpg"}
                    alt={'Vibrance Unveiled'}
                    fill
                    className='object-cover object-center'
                />
            </div>
        </section>
    );
};

export default VibranceUnveiled;