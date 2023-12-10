'use client '
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./fotter";
import { FiMail, FiPhone, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
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
        <nav class="  overflow-x-hidden w-full z-50  shadow-md shadow-gray-600  border-b-2 border-yellow-600 ">
            <div
                    className={` hidden sm:flex  bg-white bg-opacity-30  justify-center  shadow-2xl shadow-gray-100 gap-20`

                    }
                >

<div  className={`  sm:flex  bg-white bg-opacity-30    shadow-2xl shadow-gray-100`

}>
                    
                        <Link
                            href="#home"
                            className="block text-pink-500 hover:py-1 hover:bg-gray-700  hover:text-white my-2 px-5  rounded-md"
                        >
                            Home
                        </Link>
                    
                    
                        <Link
                            href="#resume"
                            className="block text-pink-500 hover:bg-gray-700 hover:py-1  hover:text-white my-2 px-5  rounded-md"
                        >
                            Resume
                        </Link>
                    
                    
                        <Link
                            href="#about"
                            className="block text-pink-500 hover:bg-gray-700 hover:py-1 hover:text-white my-2 px-5  rounded-md"
                        >
                            About
                        </Link>
               
                        <Link
                            href="#contact"
                            className="block text-pink-500 hover:bg-gray-700  hover:py-1 hover:text-white my-2 px-5  rounded-md"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#project"
                            className="block text-pink-500 hover:bg-gray-700  hover:py-1 hover:text-white my-2 px-5  rounded-md"
                        >
                            project
                        </Link>
                        </div>
         <div>
                
          <Footer/>
          </div>
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
                className={`block sm:hidden z-50 bg-gray-900 bg-opacity-80 h-auto w-[40%]  fixed left-[-100%] top-[8.1%] ${toggel?"left-[0%] transition-all shadow-xl rounded-b-md translate-x-[0%] duration-100 ":"left-[-100%] transition-all translate-x-[0%]  duration-100 "}`}
            >


                <div className="text-start hover:bg-gray-700 hover:text-white text-cyan-300">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#home"
                        className="block  px-8 py-2 rounded-md"
                    >
                        Home
                    </Link>
                    </button>
                </div>
                <div className="text-start hover:bg-gray-700 hover:text-white text-cyan-300">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#resume"
                        className="block  px-8 py-2 rounded-md"
                    >
                        Resume
                    </Link>
                    </button>
                </div>
                <div className="text-start hover:bg-gray-700 hover:text-white text-cyan-300 ">
                    <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#about"
                        className="block  hover:text-white px-8 py-2 rounded-md"
                    >
                        About
                    </Link>
                    </button>
                </div>
                <div className="text-start hover:bg-gray-700 hover:text-white text-cyan-300">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#contact"
                        className="block  px-8 py-2 rounded-md"
                    >
                        Contact
                    </Link>
                    </button>
                </div>
                <div className="text-start hover:bg-gray-700 hover:text-white text-cyan-300">
                <button onClick={()=>{setToggel(false)}}>
                    <Link
                        href="#project"
                        className="block  px-8 py-2 rounded-md"
                    >
                        Project
                    </Link>
                    </button>
                </div>
                <hr className=" h-2"/>
                <div className="text-start mb-10">
                <div className='flex justify-center gap-5 items-center flex-wrap'>
            <a href='https://twitter.com/shubham_babaa'>
              <FiTwitter className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11  h-7 w-7 sm:p-2 p-1 hover:bg-blue-900' />
            </a>
            <a href='https://www.instagram.com/t_only_life/' className='text-xl'>
              <FiInstagram className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11  h-7 w-7 sm:p-2 p-1 hover:bg-red-900' />
            </a>
            <a href='https://www.linkedin.com/in/shubham-patel-4bb923267/'>
              <FiLinkedin className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11  h-7 w-7 sm:p-2 p-1 hover:bg-blue-900' />
            </a>
            <a href='https://github.com/shubham-babaa'>
              <FiGithub className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11 h-7 w-7 sm:p-2 p-1 hover:bg-gray-900' />
            </a>
          
          </div>

                </div>

            </div>
        </nav>
    );
};

export default Navhead;