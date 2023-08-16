'use client'
import React,{useState} from 'react';
import Image from 'next/image';
import {motion} from "framer-motion"
export default function Project() {
    const[constValue,setConstantValue]=useState(false);
    const[dval,setDval]=useState(false)
    const[dval2,setDval2]=useState(false)
    const[dval3,setDval3]=useState(false)
  return (
    <div className=' pb-10 px-[8%] lg:pl-40'>
      <div className='flex items-center justify-center pt-10' id="project">
      <h2 className="text-3xl text-center font-bold mb-10 text-pink-800">Project<br></br>
        <hr className='w-[30vw] ' /></h2>
      </div>
      <div className=' grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3  '>
     
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className={`hover:cursor-pointer hover:opacity-80 border-2 rounded-md relative`} onMouseEnter={()=>setDval(true)} onMouseLeave={()=>setDval(false)} >
        
        <a href="https://main--lambent-flan-782aa5.netlify.app/"> 
      
        <Image src="/project1.png" alt="" height={300} width={300} className='w-full h-[300px] object-cover ' />
   
        </a> 
        <div className={`  ${
  dval ? ' block absolute min-h-auto text-center transform-transition -translate-y-44 transition-transform duration-1000 w-full text-white bg-opacity-100 z-50' : 'hidden translate-y-44 '
}`}>
<h1 className='animate-glow'>View</h1>
</div>
        <div className={`  ${
  dval ? ' block absolute   text-center -bottom-[10.2%] transform-transition  -translate-y-11  transition-all duration-1000  bg-gray-900 w-full text-white bg-opacity-80 z-50' : 'bg-opacity-0 opacity-0 absolute bottom-0'
}`}>
  <h1 className='font-semibold'>PROJECT</h1>
  <p className='opacity-100 font-bold'>
  This project is build using  Nextjs|usin API|Tailwind css
  </p>
</div>
        </div>

        </motion.div>
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className='hover:cursor-pointer hover:opacity-90 border-2 rounded-md relative' onMouseEnter={()=>setDval2(true)} onMouseLeave={()=>setDval2(false)}>
        <a href="http://sanjayagarwalgroup.com/"> 
      
        <Image src="/project2.png" alt="" height={300} width={300} className='w-full h-[300px] object-cover ' />
   
        </a> 
        <div className={`  ${
  dval2 ? ' block absolute min-h-auto text-center transform-transition -translate-y-44 transition-transform duration-1000 w-full text-white bg-opacity-100 z-50' : 'hidden translate-y-44 '
}`}>
<h1 className='animate-glow'>View</h1>
</div>
<div className={`  ${
  dval2 ? ' block absolute   text-center -bottom-[10.2%] transform-transition  -translate-y-11  transition-all duration-1000  bg-gray-900 w-full text-white bg-opacity-80 z-50' : 'bg-opacity-0 opacity-0 absolute bottom-0'
}`}>
  <h1 className='font-semibold'>PROJECT</h1>
  <p className=' opacity-100 font-bold'>
  This project is build using JS|HTML|Tailwind css
  </p>
</div>
        </div>
        </motion.div>
        <motion.div className="div"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity:1,}}
      
          transition={{ duration: 1 }}>
        <div className='hover:cursor-pointer hover:opacity-80 border-2 rounded-md relative ' onMouseEnter={()=>setDval3(true)} onMouseLeave={()=>setDval3(false)}>
        <a href="https://main--lambent-flan-782aa5.netlify.app/"> 
      
        <Image src="/profile.jpeg" alt="" height={300} width={300} className='w-full h-[300px] object-cover hover:opacity-7' />
   
        </a> 
        <div className={`  ${
  dval3 ? ' block absolute min-h-auto text-center transform-transition -translate-y-44 transition-transform duration-1000 w-full text-white bg-opacity-50 z-50' : 'hidden translate-y-44 '
}`}>
<h1 className='animation-blink'>View</h1>
</div>
<div className={`  ${
  dval3 ? ' block absolute   text-center -bottom-[10.2%] transform-transition  -translate-y-11  transition-all duration-1000  bg-gray-900 w-full text-white bg-opacity-80 z-50' : 'bg-opacity-0 opacity-0 absolute bottom-0'
}`}>
  <h1 className='font-semibold '>PROJECT</h1>
  <p className=' opacity-100 font-bold'>
    this project is empty
  </p>
</div>
</div>
        </motion.div>
      </div>
    </div>
  )
}
