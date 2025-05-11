import React from 'react';
import Form from "@components/Form";
import Image from "@node_modules/next/image";

const LemonSpringPage = () => {
    return (
        <div className='w-full min-h-screen'>
            <section className='w-full min-h-screen pt-20'>
                <div className='custom-container'>
                    <div className='w-full text-center mb-15 md:mb-28 flex flex-col items-center gap-3'>
                        <h1 className='text-[clamp(40px,4.5vw,75px)]'>Lemon Spring</h1>
                        <div
                            className='w-[6%] max-w-[45px] min-w-[20px] aspect-square rounded-full bg-[#ef5b2b]'>

                        </div>
                        <div className='px-4 md:px-40 lg:px-68'>
                            <p className='text-[clamp(25px,2vw,50px)] leading-tight'>Bright citrus hues and golden light come together to create a refreshing escape—each frame bursts with energy, capturing the essence of renewal and the crisp, invigorating feel of a sunlit spring day.</p>
                        </div>

                    </div>

                    <div className='w-full flex flex-col md:flex-row min-h-screen bg-[#585c3f]'>
                        <div className='md:flex-1 h-[90vh] w-full relative'>
                            <Image
                                src={'/assets/lemon/pantelis-geo-tmJ0YKuWT_I-unsplash.jpg'}
                                alt={'lemon spring'}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-20 py-40 px-5 md:px-0'>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/lemon/pexels-darien-johnson-1791828-13802937.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/lemon/pexels-ron-lach-10508274.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-full h-[90vh] relative'>
                                <Image
                                    src={'/assets/lemon/pexels-vlada-karpovich-8451973.jpg'}
                                    alt={'lemon spring'}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-center bg-[#585c3f] py-10'>
                        <div className='relative'>
                            <Image
                                src={'/assets/lemon/pexels-cottonbro-5772138.jpg'}
                                alt={'lemon spring'}
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row'>
                        <div className='relative'>
                            <Image
                                src={'/assets/lemon/pexels-matheusnatan-3683585.jpg'}
                                alt={'lemon spring'}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className='relative'>
                            <Image
                                src={'/assets/lemon/pexels-daria-liudnaya-8187694.jpg'}
                                alt={'lemon spring'}
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className='relative'>
                            <Image
                                src={'/assets/lemon/pexels-vitoriasantos-3002547.jpg'}
                                alt={'lemon spring'}
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>

                </div>

            </section>
            <Form/>
        </div>
    );
};

export default LemonSpringPage;