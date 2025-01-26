"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link";

interface NavBarProps {
  cartCount: number;
}
const items = ["Sofa", "Chair", "Table", "Lamp", "Bookshelf"]; // Example items
const NavBar: React.FC<NavBarProps> = ({ cartCount }) => {
  const [isopen, setopen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  

  // Toggle Popover visibility
  const handlePopoverToggle = () => {
    setPopoverVisible(!popoverVisible);
    setTimeout(() => {
      setPopoverVisible(false);
    }, 3000);
  };


  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const results = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 text-black">
      <div className="flex items-center justify-between h-28">
        {/* Desktop Menu */}
        <div className="w-[100%] items-center">
          {/* new navbar */}
          <ul className="hidden md:flex gap-8 bg-customOffWhite w-[100%] h-28 items-center justify-around pt-7">
            {/* Logo and Brand Name */}
            <ul className="flex items-center gap-4">
              <li>
                <Image
                  src={`/images/logo.png`}
                  alt="logo"
                  width={40}
                  height={50}
                />
              </li>
              <Link href={`/`}>
                <li className="font-bold text-xl md:text-2xl cursor-pointer">
                  Comforty
                </li>
              </Link>
            </ul>

            {/* cart icon */}
            <div>
              <Link href={`/component/Cart`}>
                <li
                  className="hover:text-purple-600 cursor-pointer flex items-center gap-2 bg-white px-3 py-1 rounded-md"
                  onClick={handlePopoverToggle}
                >
                  <span>
                    <BsCart2 className="size-6" />
                  </span>
                  <span>cart</span>
                  <span className="ml-2 text-teal-500 font-bold">
                    {cartCount}
                  </span>
                </li>
              </Link>
            </div>
          </ul>

          {/* previous navbar */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-16 px-4 md:px-8 py-4 md:py-0 bg-white shadow-md">
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
              <Link href={`/`}>
                <li className="hover:text-purple-600 transition-colors cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href={`/product`}>
                <li className="hover:text-purple-600 transition-colors cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href={`/component/About`}>
                <li className="hover:text-purple-600 transition-colors cursor-pointer">
                  About
                </li>
              </Link>
              <Link href={`/component/Contact`}>
                <li className="hover:text-purple-600 transition-colors cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>

            {/* Search Bar */}
            <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end">
              <fieldset className="relative w-full md:w-64">
                <label htmlFor="Search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 text-gray-500"
                      >
                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    type="search"
                    name="Search"
                    placeholder="Search..."
                    className="w-full py-2 pl-10 pr-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-100"
                  />
                </div>
              </fieldset>
            </div>

            {/* Contact Information */}
            <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end text-sm font-medium text-gray-500 gap-10">
              <p>
                Contact: <span className="font-semibold">(808) 555-0111</span>
              </p>
              {/* cart icon */}
              <div className="md:hidden border border-indigo-600">
                <Link href={`/component/Cart`}>
                  <li
                    className="hover:text-purple-600 cursor-pointer flex items-center gap-2 bg-white px-3 py-1 rounded-md"
                    onClick={handlePopoverToggle}
                  >
                    <span>
                      <BsCart2 className="size-6" />
                    </span>
                    <span>cart</span>
                    <span className="ml-2 text-teal-500 font-bold">
                      {cartCount}
                    </span>
                  </li>
                </Link>
              </div>
              {/* Mobile Menu Toggle */}
              <div
                onClick={() => setopen(!isopen)}
                className="md:hidden cursor-pointer text-2xl flex items-center justify-end list-none gap-10 w-fit"
              >
                <GiHamburgerMenu className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isopen && (
          <div className="absolute top-28  w-full bg-white shadow-md z-40">
            <ul className="flex flex-col items-start gap-4 px-6 py-4">
              <Link href={`/`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">Home</li>
              </Link>
              <Link href={`/product`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Product
                </li>
              </Link>
              <Link href={`/component/About`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">About</li>
              </Link>

              <Link href={`/component/Contact`} onClick={() => setopen(false)}>
                <li className="hover:text-purple-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}

        {/* Popover Notification */}
        {popoverVisible && (
          <div className="fixed top-20 right-5 bg-teal-500 text-white p-4 rounded-md shadow-md">
            <p>Item added to the cart!</p>
          </div>
        )}
      </div>
     <div className="absolute top-48 left-[50%]">
     {filteredItems.map((item)=>(
        <div key={item}>
         <ul>
          {item}
         </ul>
        </div>
      ))}
     </div>
    </nav>
  );
};

export default NavBar;
