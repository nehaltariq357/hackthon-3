import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="flex flex-col gap-5">
            <div className="mb-4 flex gap-2">
              <span>
              <Image src={`/images/logo.png`} alt="logo" width={40} height={50} />
              </span>
              <span className="text-[#272343] text-[26px] font-semibold">Comforty</span>
            </div>
            <p className="text-gray-400 leading-6">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus 
            </p>
            <div className="flex gap-5 items-center text-3xl">
            <Link href={"https://www.linkedin.com/in/nehaltariqq/"} target="_blank"><FaLinkedin /></Link>
            <Link href={"https://github.com/nehaltariq357"} target="_blank"> <FaGithubSquare /></Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="ml-14">
            <h3 className="text-lg font-bold mb-4 text-[#9A9CAA]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/About" className="hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-gray-300">Products</Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-gray-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="ml-14">
            <h3 className="text-lg font-bold mb-4 text-[#9A9CAA]">Support</h3>
            <ul className="space-y-2">
              <li>
                Help & Support
              </li>
              <li>
                Terms & Conditions
              </li>
              <li>
                Privacy Policy
              </li>
              <li>Help</li>
            </ul>
          </div>

          
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsteller</h3>
            <form className="flex flex-col space-y-2 items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-black rounded-md border border-gray-500"
              />
              <button
                type="submit"
                className="bg-[#029FAE] text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nehal, Inc. All rights reserved.
          </p>
          <div className="space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;