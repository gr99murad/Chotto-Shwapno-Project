import React from 'react';
import banner from '../../assets/bannerImg.JPG';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="py-20">
            <div>
                {/* Animate image from left to right */}
                <motion.img
                    src={banner}
                    alt="Banner"
                    className="rounded-br-[100px] rounded-tr-2xl rounded-bl-2xl rounded-tl-[100px] h-[540px] w-[1440px]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                />

                <h1 className="font-bold text-white text-xl md:text-6xl -mt-20 md:-mt-44 ml-8 md:ml-14">
                    <span className="text-[#C24C2E]">Fundraising</span> For The People And <br />
                    <span className="text-white">
                        <Typewriter
                            words={['Causes You Care.', 'Communities in Need.', 'Hope for Every Child.']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
