import React from 'react';
import Image from "@node_modules/next/image";

const Form = ({id}) => {
    return (
        <section
            id={id}
            className='w-full min-h-screen bg-gradient-to-t from-[#81AAB5] via-[#F0B395] to-[#F4F1EB] flex justify-center'>
            <div className='custom-container w-full h-full flex flex-col md:flex-row'>
                <div className="flex-1 flex items-center justify-center relative">
                    <div
                        className="w-[50%] md:w-[70%] aspect-square flex items-center justify-center relative md:z-0">
                        <Image
                            src={'/assets/object.gif'}
                            alt={'object'}
                            fill
                            unoptimized
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
                                    className="pl-2 border-b-2 border-[#0D53BA] font-medium text-[clamp(25px,1.6vw,40px)]  placeholder-[#ef5b2b]"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="pl-2 border-b-2 border-[#0D53BA] font-medium text-[clamp(25px,1.6vw,40px)]  placeholder-[#ef5b2b]"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className="p-2 border-b-2 border-[#0D53BA] h-40 font-medium text-[clamp(25px,1.6vw,40px)] resize-none overflow-y-auto hideScrollContainer bg-[rgba(255,255,255,0.2)] placeholder-[#ef5b2b]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-[90%] text-[clamp(25px,1.6vw,30px)] border font-bold border-[#ef5b2b] rounded-full px-3 min-w-[80px] hover:bg-[rgba(239,91,43,0.75)] transition-color duration-500 ease-in-out"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex-1 flex md:flex-col py-7 md:py-0 items-center justify-center gap-20">
                    <h1 className='text-[clamp(20px,3vw,45px)] cursor-pointer hover:text-[#ef5b2b] hover:scale-105 transition-all duration-200'>Instagram</h1>
                    <h1 className='text-[clamp(20px,3vw,45px)] cursor-pointer hover:text-[#ef5b2b] hover:scale-105 transition-all duration-200'>Twitter</h1>
                    <h1 className='text-[clamp(20px,3vw,45px)] cursor-pointer hover:text-[#ef5b2b] hover:scale-105 transition-all duration-200'>TikTok</h1>
                </div>
            </div>
        </section>
    );
};

export default Form;