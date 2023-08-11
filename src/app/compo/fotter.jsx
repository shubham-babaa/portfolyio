'use client'
import React,{useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  
    return (
        <div className='bg-gray-800  gap-11  pb-5 px-auto'>
            <div className='text-xl font-extralight text-blue-300 flex items-center  text-center justify-center'>
                I am a web developer and front-end enthusiast. <br />
            </div>
            <div className='sm:grid-cols-2 mt-10 flex justify-between sm:px-[20%] px-5'>
                {/* <div className='text-center sm:text-left mb-8 sm:mb-0 '>
                    <h1 className='text-3xl text-pink-400 mb-5' id="contact">Contact</h1>
                    <div className='flex gap-5'>
                    <Link href="mailto:manshipatel.deep@example.com ">
            <svg className="text-blue bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailIcon" style={{ fontSize: '30px' }} fill="gray" >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          </Link>
          <Link href="tel:+6265305788">
            <svg className="text-white bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallIcon"  fill="green">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
            </svg>
          </Link>
        </div>
                </div>
                <div className='text-center '>
                    <h1 className='text-3xl text-pink-400 mb-3 '>Find Me </h1>
                    <div className='flex justify-center gap-5 items-center flex-wrap'>
                    <Link href="#">
                    <svg className="text-white bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon"  fill='blue'>
  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
</svg>

                    </Link>
                    <Link href="#" className="text-xl">
                    <svg className="text-white bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon" fill='red' >
  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>



                    </Link>
                    <Link href="#">
                    <svg className="text-white bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon" style={{ fontSize: '10px' }} fill="blue">
  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
</svg>

                    </Link>
                    <Link href="https://github.com/">
                    <svg className="text-white bg-white h-7 rounded-full " focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon" style={{ fontSize: '10px' }} fill="gray">
  <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
</svg>

                    </Link>
                    <Link href="https://leetcode.com/problemset/all/">
            <Image src="/leetcode.svg" alt="" height={600} width={400} className='w-[150px] mx-auto  mt-3 ' />
          </Link>
          </div>
                </div> */}
            </div>
            <div className='text-xl font-extralight text-center text-blue-300 mt-8 sm:mt-16'>I am Shubham Patel, a web developer and front-end enthusiast. Let's connect and build something amazing together.
            <br />
            </div>
        </div>
    )
}

