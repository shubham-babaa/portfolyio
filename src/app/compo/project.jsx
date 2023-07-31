'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import {motion} from "framer-motion"
export default function Project() {
    const[constValue,setConstantValue]=useState(false);
  return (
    <div className='bg-gray-800 pb-10 px-[8%] lg:pl-40'>
      <div className='flex items-center justify-center pt-10' id="project">
      <h2 className="text-3xl text-center font-bold mb-10 text-pink-800">Project<br></br>
        <hr className='w-[30vw] ' /></h2>
      </div>
      <div className=' grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3  '>
     
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className={`hover:cursor-pointer hover:opacity-50 border-2 rounded-md`}>
        
        <a href="https://main--lambent-flan-782aa5.netlify.app/"> 
      
        <Image src="/project1.png" alt="" height={300} width={300} className='w-full h-[300px] object-cover ' />
   
        </a> 
        </div>
        </motion.div>
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className='hover:cursor-pointer hover:opacity-50 border-2 rounded-md'>
        <a href="http://sanjayagarwalgroup.com/"> 
      
        <Image src="/project2.png" alt="" height={300} width={300} className='w-full h-[300px] object-cover ' />
   
        </a> 
        </div>
        </motion.div>
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className='hover:cursor-pointer hover:opacity-50 border-2 rounded-md ' >
        <a href="https://main--lambent-flan-782aa5.netlify.app/"> 
      
        <Image src="/profile.jpeg" alt="" height={300} width={300} className='w-full h-[300px] object-cover hover:opacity-7' />
   
        </a> 
        <div ></div>
        </div>
        </motion.div>
      </div>
    </div>
  )
}
