'use client'
import React from 'react';
import Image from 'next/image';
import { FiMail, FiPhone, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='gap-11 pb-5 px-auto shadow-2xl shadow-gray-100'>
      <div className='text-xl font-extralight text-blue-300 flex items-center text-center justify-center'>
        I am a web developer and front-end enthusiast. <br />
      </div>
      <div className='sm:grid-cols-2 mt-10 flex justify-between sm:px-[20%] px-5'>
        <div className='text-center sm:text-left mb-8 sm:mb-0 '>
          <h1 className='text-3xl text-pink-400 mb-5' id='contact'>
            Contact
          </h1>
          <div className='flex gap-5'>
            <a href='mailto:manshipatel.deep@example.com'>
              <FiMail className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11  h-7 w-7 sm:p-2 p-1' />
            </a>
            <a href='tel:+6265305788'>
              <FiPhone className='text-blue-300 bg-gray-500 rounded-full sm:h-11 sm:w-11  h-7 w-7 sm:p-2 p-1' />
            </a>
          </div>
        </div>
        <div className='text-center '>
          <h1 className='text-3xl text-pink-400 mb-3 '>Find Me </h1>
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
            <a href='https://leetcode.com/baba123456789/'>
              <Image
                src='/leetcode.svg'
                alt=''
                height={600}
                width={400}
                className='w-[150px] mx-auto mt-3'
              />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}
