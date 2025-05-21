import React from 'react';

import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#C24C2E1A] py-10 px-4 text-[#4a4a4a] font-sans">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8 md:gap-12 lg:gap-16">
                {/* Left Section: Logo, Address, Contact */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto flex-grow md:flex-grow-0 md:pr-5">
                    <img src={logo} alt="Organization Logo" className="w-24 mb-5" />
                    <p className="mb-2 leading-relaxed text-sm lg:text-base">
                        Floor #5, 12 & 17 Nova Heights, 45, <br />
                        47 Nelson Mandela Street, <br />
                        Gulshan-2, Dhaka 1212
                    </p>
                    <p className="mb-2 text-sm lg:text-base">
                        <a href="mailto:youremail@gmail.com" className="hover:underline">youremail@gmail.com</a>
                    </p>
                    <p className="mb-2 text-sm lg:text-base">
                        <a href="tel:+880123456789" className="hover:underline">+880123456789</a>
                    </p>
                    <button className="bg-[#C24C2E] text-white px-5 py-2.5 rounded-md mt-4 text-base transition-colors duration-300 hover:bg-[#c95a3a]">
                        Our Journey
                    </button>
                </div>

                {/* Middle Sections: Menu & Others Links */}
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-12 sm:gap-20 md:gap-10 lg:gap-20 w-full md:w-auto flex-grow md:flex-grow-0 md:border-l md:border-[#ddd] md:pl-5">
                    <div className="text-center md:text-left w-full sm:w-auto">
                        <h4 className="text-lg font-bold mb-4 text-[#C24C2E]">Menu</h4>
                        <ul className="space-y-2 text-sm lg:text-base">
                            <li><a href="/" className="hover:text-[#e06c4b]">Home</a></li>
                            <li><a href="/about-us" className="hover:text-[#e06c4b]">About us</a></li>
                            <li><a href="/campaign" className="hover:text-[#e06c4b]">Campaign</a></li>
                            <li><a href="/education" className="hover:text-[#e06c4b]">Education</a></li>
                            <li><a href="/categories" className="hover:text-[#e06c4b]">Categories</a></li>
                            <li><a href="/contact" className="hover:text-[#e06c4b]">Contact</a></li>
                            <li><a href="/login" className="hover:text-[#e06c4b]">Login</a></li>
                            <li><a href="/donate" className="hover:text-[#e06c4b]">Donate Now</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left w-full sm:w-auto">
                        <h4 className="text-lg font-bold mb-4 text-[#C24C2E]">Others Links</h4>
                        <ul className="space-y-2 text-sm lg:text-base">
                            <li><a href="/testimonial" className="hover:text-[#e06c4b]">Testimonial</a></li>
                            <li><a href="/our-advisors" className="hover:text-[#e06c4b]">Our Advisors</a></li>
                            <li><a href="/safe-now" className="hover:text-[#e06c4b]">Safe Now</a></li>
                            <li><a href="/find-donor" className="hover:text-[#e06c4b]">Find A Blood Donor</a></li>
                            <li><a href="/review" className="hover:text-[#e06c4b]">Review</a></li>
                            <li><a href="/dev-team" className="hover:text-[#e06c4b]">Dev Team</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Section: Newsletter & Social Media */}
                <div className="w-full md:w-auto flex-grow md:flex-grow-0 text-center md:text-left md:pl-5">
                    <h4 className="text-lg font-bold mb-5 text-[#C24C2E] max-w-xs mx-auto md:mx-0 leading-normal">
                        Subscribe to our newsletter for updates and announcements.
                    </h4>
                    <div className="flex flex-col sm:flex-row bg-[#f9dcdc] rounded-md overflow-hidden mb-6 border border-[#f2caca] w-full max-w-sm mx-auto md:mx-0">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow p-3 text-base bg-transparent border-b sm:border-b-0 sm:border-r border-[#f2caca] outline-none placeholder-gray-500"
                        />
                        <button className="bg-[#C24C2E] text-white px-5 py-3 text-base flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#c95a3a]">
                            Subscribe <i className="fas fa-arrow-right text-sm"></i>
                        </button>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4 mb-6">
                        <a href="#" aria-label="Facebook" className="text-[#e06c4b] text-2xl hover:scale-110 transition-transform duration-200"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram" className="text-[#e06c4b] text-2xl hover:scale-110 transition-transform duration-200"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn" className="text-[#e06c4b] text-2xl hover:scale-110 transition-transform duration-200"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="YouTube" className="text-[#e06c4b] text-2xl hover:scale-110 transition-transform duration-200"><i className="fab fa-youtube"></i></a>
                        <a href="#" aria-label="WhatsApp" className="text-[#e06c4b] text-2xl hover:scale-110 transition-transform duration-200"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <p className="text-sm text-gray-600">
                        &copy; 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;