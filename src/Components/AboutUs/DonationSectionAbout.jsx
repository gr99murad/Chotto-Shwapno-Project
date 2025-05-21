import React from "react";
import { motion } from "framer-motion";

import DonationImg1 from "../../assets/IMG_20250125_095057.jpg";
import DonationImg2 from "../../assets/IMG_20250125_095059.jpg";
import DonationImg3 from "../../assets/IMG_20250125_101139.jpg";
import DonationImg4 from "../../assets/IMG_20250125_101211.jpg";
import DonationImg5 from "../../assets/IMG_20250125_095059.jpg";
import { div } from "framer-motion/client";
import Navbar from "../../SharedFile/Navbar";

// animation
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const DonationSectionAbout = () => {
  /** images used **/
  const heroTop = DonationImg1;
  const heroBottom = DonationImg4;
  const rightColumn = [
    { src: DonationImg2, mask: "rounded-md" },
    { src: DonationImg5, mask: "rounded-[0_100%_0_0]" }, // quarter‑circle top‑right
    { src: DonationImg3, mask: "rounded-md col-span-2 row-span-2" },
    { src: DonationImg2, mask: "rounded-[100%_0_0_0]" }, // quarter‑circle bottom‑left
    { src: DonationImg5, mask: "rounded-md" },
  ];

  return (

    <div>
        <section>
      {/* central decorative line */}
      <span className="left-1/2 w-px bg-[#ebd3ce]/70 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 lg:px-8">
        {/* Left – text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5 max-w-2xl text-gray-700 leading-relaxed"
        >
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. est eros bibendum elit.",
            "Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.","Aliquam erat ac ipsum. Integer aliquam purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.",
          ].map((txt, i) => (
            <motion.p key={i} variants={fadeIn} custom={i}>
              {txt}
            </motion.p>
          ))}
        </motion.div>

        {/* Right – image area */}
        <div className="flex gap-6 w-full">
          {/* Hero column */}
          <div className="flex flex-col gap-6 flex-1 min-w-[55%]">
            <motion.img
              src={heroTop}
              alt="Volunteer"
              className="w-full object-cover rounded-xl h-[260px] lg:h-[300px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={heroBottom}
              alt="Children"
              className="w-full object-cover rounded-xl h-[220px] lg:h-[240px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Slim grid column */}
          <div className="grid grid-cols-2 grid-rows-4 gap-4 w-52">
            {rightColumn.map((img, i) => (
              <motion.img
                key={i}
                src={img.src}
                alt="volunteer collage"
                className={`object-cover w-full h-full ${img.mask}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 6}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default DonationSectionAbout;
