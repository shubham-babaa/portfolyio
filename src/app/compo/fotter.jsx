'use client'
import React from 'react';
import Image from 'next/image';
import { FiMail, FiPhone, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='gap-11 pb-5 px-auto shadow-2xl shadow-gray-100 mt-2'>
    
      <div className='  flex justify-end gap-4 '>
       
         
        
            <a href='mailto:manshipatel.deep@example.com'>
              <FiMail className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-gray-900' />
            </a>
            <a href='tel:+6265305788'>
              <FiPhone className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-green-900' />
            </a>
          
      

       
          <a href='https://twitter.com/shubham_babaa'>
              <FiTwitter className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-blue-900' />
            </a>
            <a href='https://www.instagram.com/t_only_life/' className='text-xl'>
              <FiInstagram className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-red-900' />
            </a>
            <a href='https://www.linkedin.com/in/shubham-patel-4bb923267/'>
              <FiLinkedin className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-blue-900' />
            </a>
            <a href='https://github.com/shubham-babaa'>
              <FiGithub className='text-white bg-yellow-600 rounded-full  h-7 w-7  p-1 hover:bg-gray-900' />
            </a>
            <a href='https://leetcode.com/baba123456789/'>
              <Image
                src='/leetcode.svg'
                alt=''
                height={600}
                width={400}
                className='w-[100px] mx-auto mt-1 hover:w-[110px]'
              />
            </a>
  
      </div>
      
    </div>
  );
}
