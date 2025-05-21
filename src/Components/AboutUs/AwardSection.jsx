import React from "react";
import { motion } from "framer-motion";

import Img1 from "../../assets/DSC_8680.JPG";
import Img2 from "../../assets/DSC_8872.JPG";
import Img3 from "../../assets/DSC_9016.JPG";
import Img4 from "../../assets/DSC_9071.JPG";
import Img5 from "../../assets/DSC_9114.JPG";
import Img6 from "../../assets/DSC_9047.JPG";
import Img7 from "../../assets/DSC_9033.JPG";


const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const AwardSection = () => {
  return (
    <section className="relative overflow-hidden py-24 ">
      {/* vertical line */}
      <span className="left-1/2 w-px bg-[#ebd3ce]/60 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start px-4 lg:px-8">
        {/** ─── Left – image collage ─── */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 lg:gap-6 w-full max-w-xl mx-auto lg:mx-0">
          {/* Row 1 */}
          <motion.img
            src={Img1}
            alt="award ceremony"
            className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          />
          <motion.img
            src={Img2}
            alt="audience"
            className="col-span-1 row-span-1 w-full h-full object-cover rounded-[0_100%_0_0]" /* quarter‑circle top‑right */
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          />

          {/* Row 2 */}
          <motion.img
            src={Img3}
            alt="awardees"
            className="w-full h-full object-cover rounded-lg"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          />
          <motion.img
            src={Img4}
            alt="speaker"
            className="w-full h-full object-cover rounded-[100%] col-span-1 row-span-1" /* perfect circle */
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          />
          <motion.img
            src={Img5}
            alt="bouquet"
            className="w-full h-full object-cover rounded-[0_0_0_100%] col-span-1 row-span-1" /* quarter‑circle bottom‑left */
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          />

          {/* Row 3 */}
          <motion.img
            src={Img6}
            alt="group photo"
            className="col-span-2 row-span-1 w-full h-full object-cover rounded-lg"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          />
          <motion.img
            src={Img7}
            alt="speaker side"
            className="w-full h-full object-cover rounded-[0_0_100%_0]" /* quarter‑circle bottom‑right */
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
          />
        </div>

        {/** ─── Right – text paragraphs ─── */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-44 space-y-4 text-gray-700 leading-relaxed max-w-2xl"
        >
          {[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
            "Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.",
            "Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.",
          ].map((p, i) => (
            <motion.p key={i} variants={fade} custom={i + 7}>
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;
