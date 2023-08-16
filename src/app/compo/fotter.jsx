'use client'
import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { FiMail, FiPhone, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';


export default function Footer() {
    return (
        <div className='bg-gray-800 gap-11 pb-5 px-auto'>
           <div className='text-xl font-extralight text-blue-300 flex items-center  text-center justify-center'>
                I am a web developer and front-end enthusiast. <br />
            </div>
            <div className='sm:grid-cols-2 mt-10 flex justify-between sm:px-[20%] px-5'>
                <div className='text-center sm:text-left mb-8 sm:mb-0 '>
                <h1 className='text-3xl text-pink-400 mb-5' id="contact">Contact</h1>
                    <div className='flex gap-5'>
                        <a href="mailto:manshipatel.deep@example.com">
                            <FiMail className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                        <a href="tel:+6265305788">
                            <FiPhone className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                    </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-3xl text-pink-400 mb-3 '>Find Me </h1>
                    <div className='flex justify-center gap-5 items-center flex-wrap'>
                        <a href="#">
                            <FiTwitter className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                        <a href="#" className="text-xl">
                            <FiInstagram className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                        <a href="#">
                            <FiLinkedin className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                        <a href="https://github.com/">
                            <FiGithub className="text-blue-300 bg-gray-500 rounded-full sm:h-16 sm:w-16 h-7 w-7 sm:p-2 p-1" />
                        </a>
                        <a href="https://leetcode.com/problemset/all/">
                            <Image src="/leetcode.svg" alt="" height={600} width={400} className='w-[150px] mx-auto mt-3' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-xl font-extralight text-center text-blue-300 mt-8 sm:mt-16'>I am Shubham Patel, a web developer and front-end enthusiast. Let's connect and build something amazing together.
            <br />
            </div>
        </div>
    )
}
