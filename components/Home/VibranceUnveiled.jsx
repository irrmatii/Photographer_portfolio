import React from 'react';
import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";

const VibranceUnveiled = () => {
    return (
        <section className='w-full min-h-screen flex flex-col md:flex-row relative'>
            <div className='mx-15 md:m-15  min-h-[70vh] flex-1 flex items-center justify-center relative'>
                <Image
                    src={"/assets/suits/pexels-cottonbro-10547919.jpg"}
                    alt={'Vibrance Unveiled'}
                    fill
                    className='object-cover object-center'
                />
                <div
                    className='h-[55%] lg:h-[70%] w-[80%] md:w-[60%] flex flex-col items-center justify-center gap-5 lg:gap-15 z-10 bg-[#849399] rounded-md'>
                    <div
                        className='px-10 xl:px-20 w-full max-w-[580px] text-center flex items-center justify-center'>
                        <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-gray-50 font-light'>Vibrance
                            Unveiled</h1>
                    </div>
                    <div
                        className='pb-5 px-10 xl:px-20 w-full max-w-[580px] flex flex-col gap-10 text-center'>
                        <p className='text-gray-50 text-[clamp(25px,2vw,50px)] leading-tight font-medium'>Bold
                            hues, tailored brilliance where color meets confidence in every frame.</p>
                        <Link href={'/work/vibrance_unveiled'}
                              className='montserrat text-gray-50 text-md underline underline-offset-3 cursor-pointer'
                        >
                            See Project {'>>'}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='md:flex-1 min-h-screen lg:h-[120vh] relative'>
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