'use client '
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Navhead = () => {
    const [toggel, setToggel] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    // Function to check for the screen width condition on initial render
    function checkScreenWidth() {
      setScreenWidth(window.innerWidth);
      setToggel(false); // Reset the toggled state when the screen size changes
    }

    // Function to handle scroll event and hide the menu
    function handleScroll() {
      if (window.scrollY > 1) {
     
        setToggel(false);
      }
    }

    // Add event listeners on component mount
    window.addEventListener("resize", checkScreenWidth);
    window.addEventListener("scroll", handleScroll);

    // Remove event listeners on component unmount
  
  }, [screenWidth]);



    return (
        <nav class="  overflow-x-hidden w-full z-50  ">
            <div
                    className={` hidden sm:flex  bg-cyan-900  justify-center `

                    }
                >


                    
                        <Link
                            href="#home"
                            className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                        >
                            Home
                        </Link>
                    
                    
                        <Link
                            href="#resume"
                            className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                        >
                            Resume
                        </Link>
                    
                    
                        <Link
                            href="#about"
                            className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                        >
                            About
                        </Link>
               
                        <Link
                            href="#contact"
                            className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#project"
                            className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                        >
                            project
                        </Link>
                

                </div>
            <div className=" flex justify-between sm:hidden h-auto bg-cyan-900 w-[100%] px-5 py-2 z-50">

                


                {toggel ? (<button onClick={() => {
                    setToggel(false)
                }}><svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="red"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                        <line x1="3" y1="3" x2="21" y2="21"></line>
                        <line x1="21" y1="3" x2="3" y2="21"></line>
                    </svg>
                </button>) : (<button className="">
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="none"
                        stroke="white"
                        strokeWidth="2" // Corrected the attribute name from 'stroke-width' to 'strokeWidth'
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className=""
                        onClick={() => {
                            setToggel(true);
                        }}
                    >
                        <path d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </button>)}

                <div className="text-white">
                    <span className="">
                        <Image
                            src="/profile.jpeg"
                            height={100}
                            width={100}
                            alt="profile ig"
                            className="rounded-full h-[3rem] w-[3rem] "
                        ></Image>
                    </span>
                </div>
            </div>
            <div
                className={`block sm:hidden z-50 bg-blue-300  h-[500px] w-[97%] fixed left-[-100%] top-13 ${toggel?"left-[0%] transition-all shadow-2xl shadow-red-400 translate-x-[0%] duration-100 ":"left-[-100%] transition-all translate-x-[0%]  duration-100 "}`}
            >


                <div className="text-start">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#home"
                        className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                    >
                        Home
                    </Link>
                    </button>
                </div>
                <div className="text-start">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#resume"
                        className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                    >
                        Resume
                    </Link>
                    </button>
                </div>
                <div className="text-start">
                    <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#about"
                        className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                    >
                        About
                    </Link>
                    </button>
                </div>
                <div className="text-start">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#contact"
                        className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                    >
                        Contact
                    </Link>
                    </button>
                </div>
                <div className="text-start">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#project"
                        className="block text-pink-500 hover:bg-gray-700 hover:text-white px-8 py-2 rounded-md"
                    >
                        Project
                    </Link>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navhead;