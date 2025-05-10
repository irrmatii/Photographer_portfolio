'use client'
import React, {useState} from 'react';
import Button from "@components/Button";
import Image from "next/image";

const Page = () => {

    const [hoveredPhone, setHoveredPhone] = useState(null)
    const [hoveredFlower, setHoveredFlower] = useState(null)

    return (
        <div className='w-full h-full'>
            <section className='w-full h-screen flex items-center justify-center md:justify-start mb-[100px]'>
                <div className='custom-container px-3 text-center md:pl-25 md:text-left relative '>
                    <h1 className='text-[clamp(60px,10vw,150px)] leading-tight font-light'>Jasper Lane <br/> Visual Storyteller <br/> & Photographer</h1>
                    <div className='w-[15%] aspect-square absolute top-5 right-0 md:right-[10%]'>
                        <Image
                            src={'/assets/phoneIcon.png'}
                            alt={'phone'}
                            fill
                            className={`${hoveredPhone ? 'opacity-0' : 'opacity-100'}`}
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
                            className={`absolute ${hoveredPhone ? 'opacity-100' : 'opacity-0'}`}
                            onMouseEnter={() => setHoveredPhone(true)}
                            onMouseLeave={() => setHoveredPhone(null)}
                        />
                    </div>
                    <div className='w-[15%] aspect-square absolute -bottom-14 left-[28%] md:-bottom-31'>
                        <Image
                            src={'/assets/flowerIcon.png'}
                            alt={'phone'}
                            width={110}
                            height={110}
                            className={`${hoveredFlower ? 'opacity-0' : 'opacity-100'}`}
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
                            className={`${hoveredFlower ? 'opacity-100' : 'opacity-0'}`}
                            onMouseEnter={() => setHoveredFlower(true)}
                            onMouseLeave={() => setHoveredFlower(null)}
                        />
                    </div>
                </div>
            </section>

            <section className='w-full min-h-screen h-[120vh] flex justify-center mb-[100px]'>
                <div className='custom-container w-full flex-grow flex items-center justify-center'>
                    <div className='w-[85%] xl:w-full h-full bg_radial flex rounded-md items-center justify-center'>
                        <div className='w-[90%] max-w-[1100px] h-[80%] md:h-[65%] md:max-h-[700px] bg-[#F4F1EB] flex flex-col items-center justify-center'>
                            <div className='text-center w-[80%] flex flex-col items-center gap-7'>
                                <h1 className='text-[clamp(40px,4.5vw,75px)] leading-tight'>Every Frame Holds a Story</h1>
                                <div className='w-[8%] max-w-[60px] min-w-[25px] aspect-square rounded-full bg-[#ef5b2b]'></div>
                                <p className='text-[clamp(30px,2vw,55px)] leading-tight mb-4'>
                                    I’m a visual storyteller and photographer, capturing fleeting moments that speak
                                    without words. Based in San Francisco, I turn moments into timeless stories that
                                    resonate long after they're seen.
                                </p>
                                <Button value='More'/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full min-h-screen mb-[100px] flex flex-col gap-20 md:gap-0'>
                <div className='text-center mb-28'>
                    <h1 className='text-[clamp(40px,4.5vw,75px)]'>My Projects</h1>
                </div>

                <section className='w-full min-h-screen flex flex-col-reverse md:flex-row '>
                    <div className='md:flex-1 w-full h-[90vh] md:h-auto relative -z-10'>
                        <Image
                            src={'/assets/lemon/pexels-vlada-karpovich-8451973.jpg'}
                            alt={'lemon spring'}
                            fill
                            className='object-cover object-top'
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
                            <h1 className='text-[clamp(50px,5vw,80px)] text-[#fffc75] font-light'>Lemon</h1>
                            <h1 className='text-[clamp(50px,5vw,80px)] text-[#fffc75] font-light pl-5 md:pl-10'>Spring</h1>
                        </div>
                        <div className='px-20 pb-15 flex flex-col gap-10 text-center md:text-left'>
                            <p className='text-[#fffc75] text-[clamp(25px,2vw,50px)] leading-tight'>A lively blend of sunshine, citrus, and
                                blooms—spring’s vibrant kiss in every shot.</p>
                            <p className='montserrat text-[#fffc75] text-md underline underline-offset-3 cursor-pointer'>See
                                Project {'>>'}</p>
                        </div>
                    </div>
                </section>

                <section className='w-full h-screen relative'>
                    <Image
                        src={"/assets/clouds/pexels-ron-lach-8262597.jpg"}
                        alt={'Dreamscape Serenity'}
                        fill
                        className='object-cover object-center -z-10'
                    />
                    <div className='h-full flex flex-col gap-15 justify-end xl:justify-center'>
                        <div className='px-10 xl:px-20 w-full max-w-[580px] text-center'>
                            <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-gray-950 font-light'>Dreamscape Serenity</h1>
                        </div>
                        <div className='pb-20 px-10 xl:px-20 w-full max-w-[580px] flex flex-col gap-10 text-center'>
                            <p className='text-gray-950 text-[clamp(25px,2vw,50px)] leading-tight font-medium'>Drift away in a celestial embrace where
                                soft clouds
                                cradle beauty, and serenity feels infinite.</p>
                            <p className='montserrat text-gray-950 text-md underline underline-offset-3 cursor-pointer'>See
                                Project {'>>'}</p>
                        </div>
                    </div>
                </section>

                <section className='w-full min-h-screen flex flex-col md:flex-row relative'>
                    <div className='mx-15 md:m-15  min-h-[70vh] flex-1 flex items-center justify-center relative'>
                        <Image
                            src={"/assets/suits/pexels-cottonbro-10547919.jpg"}
                            alt={'Vibrance Unveiled'}
                            fill
                            className='object-cover object-center'
                        />
                        <div className='h-[55%] lg:h-[70%] w-[80%] md:w-[60%] flex flex-col items-center justify-center gap-5 lg:gap-15 z-10 bg-[#849399] rounded-md'>
                            <div className='px-10 xl:px-20 w-full max-w-[580px] text-center flex items-center justify-center'>
                                <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-gray-50 font-light'>Vibrance Unveiled</h1>
                            </div>
                            <div className='pb-5 px-10 xl:px-20 w-full max-w-[580px] flex flex-col gap-10 text-center'>
                                <p className='text-gray-50 text-[clamp(25px,2vw,50px)] leading-tight font-medium'>Bold hues, tailored brilliance where color meets confidence in every frame.</p>
                                <p className='montserrat text-gray-50 text-md underline underline-offset-3 cursor-pointer'>See
                                    Project {'>>'}</p>
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

                <section className='w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center'>
                    <div
                        className='w-full md:w-[30%] md:h-[85%] bg-[#194a64] md:[clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] px-3 md:py-10 md:pr-15 md:pl-10 xl:pr-30 xl:pl-10 flex flex-col items-center md:justify-between'>
                        <div className='w-full md:pl-10 pt-10 xl:pl-33 text-center [text-shadow:0_0_15px_rgba(255,105,180,0.7)]'>
                            <h1 className='text-[clamp(50px,4.5vw,80px)] leading-tight text-[#ecd6eb] font-light'>Retro Radiance
                            </h1>
                        </div>
                        <div className='pt-20 pb-5 flex flex-col gap-10 text-center'>
                            <p className='text-[#ecd6eb] text-[clamp(25px,2vw,50px)] leading-tight font-medium [text-shadow:0_0_15px_rgba(255,105,180,0.7)] xl:pl-5'>Glistening
                                lights, bold beats—where vintage flair meets disco dazzle.</p>
                            <p className='montserrat text-[#ecd6eb] text-md underline underline-offset-3 cursor-pointer [text-shadow:0_0_15px_rgba(255,105,180,0.7)]'>See
                                Project {'>>'}</p>
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
            </section>

            <section
                className='w-full min-h-screen bg-gradient-to-t from-[#81AAB5] via-[#F0B395] to-[#F4F1EB] flex justify-center'>
                <div className='custom-container w-full h-full flex flex-col md:flex-row'>
                    <div className="flex-1 flex items-center justify-center relative">
                        <div
                            className="w-[50%] md:w-[70%] aspect-square flex items-center justify-center relative md:z-0">
                            <Image
                                src={'/assets/object.gif'}
                                alt={'object'}
                                fill
                                className='z-0'
                            />
                        </div>
                    </div>

                    <div className="flex-1 pt-10">
                        <h1 className='text-[clamp(40px,4.5vw,75px)] text-center pb-10'>Let's connect</h1>
                        <div className="w-full h-[80%] flex items-center pb-5">
                            <form
                                className="flex flex-col items-center space-y-10 xl:space-y-20 w-[90%] max-w-[500px] xl:max-w-[700px] mx-auto"
                                action="https://formspree.io/f/mvgkwdlg"
                                method="POST"
                            >
                                <div className='w-full flex flex-col gap-10 xl:gap-20'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="pl-2 border-b-2 border-[#0D53BA] font-medium text-[clamp(15px,2vw,30px)]  placeholder-[#ef5b2b]"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="pl-2 border-b-2 border-[#0D53BA] font-medium text-[clamp(15px,2vw,30px)]  placeholder-[#ef5b2b]"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        required
                                        className="p-2 border-b-2 border-[#0D53BA] h-40 font-medium text-[clamp(15px,2vw,30px)] resize-none overflow-y-auto hideScrollContainer bg-[rgba(255,255,255,0.2)] placeholder-[#ef5b2b]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-[90%] text-[clamp(15px,2vw,30px)] border font-bold border-[#ef5b2b] rounded-full px-3 min-w-[80px] hover:bg-[rgba(239,91,43,0.75)] transition-color duration-500 ease-in-out"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex-1 flex md:flex-col py-7 md:py-0 items-center justify-center gap-20">
                        <h1 className='text-[clamp(15px,3vw,45px)]'>Instagram</h1>
                        <h1 className='text-[clamp(15px,3vw,45px)]'>Twitter</h1>
                        <h1 className='text-[clamp(15px,3vw,45px)]'>TikTok</h1>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Page;