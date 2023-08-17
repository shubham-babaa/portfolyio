'use client'
import React,{useRef}from 'react'
import Navhead from './Navhead'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import TypingAnimation from './tome'
import BubbleBackground from "./BubbleBackground";
import Fotter from './fotter'
import Resume from "./resume"
import Project from "./project"
import About from "./about"


export default function Home() {
    const ref_1 = useRef(null)
    const isInView_1 = useInView(ref_1, { once: true })
    const ref_2 = useRef(null)
    const isInView_2 = useInView(ref_2, { once: true })
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <div id="home " className=' overflow-x-hidden bg-gray-900'>
         
         <motion.div className="div"
          
            animate={{}}
            >
                <Navhead/>
            </motion.div>
           
          
            <motion.div
                key="layout"
                ref={ref}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y:isInView ? 0:10, opacity:isInView ? 1:0,}}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                id="home"
                className="relative flex min-h-[600px] rounded-b-2xl lg:mt-5  mx-auto md:justify-center z-0 p-5 "
                style={{
                    backgroundImage: `url('/kl1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                   
                
                  }}
          
            >
             
                
                <span className='lg:w-[30%] w-[90%]  mx-auto my-auto md:my-0  s shadow-gray-100 bg-opacity-50 p-10 bg-slate-500 justify-center  text-start h-full rounded-2xl px-10 '>  <TypingAnimation/></span>
              
            </motion.div>
            <motion.div className="div"
            ref={ref_1}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y:isInView_1? 0:20, opacity: isInView_1? 1:0 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1}}
            >
                <Project/>
            </motion.div>


            <motion.div className="div"
            ref={ref_2}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y:isInView_2? 0:10, opacity: isInView_2? 1:0 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1}}
            >
                <Resume/>
            </motion.div>
            <motion.div className="div"
            ref={ref_2}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y:isInView_2? 0:10, opacity: isInView_2? 1:0 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 1}}
            >
                <About/>
            </motion.div>
          

           <Fotter/>
        </div>
    )
}