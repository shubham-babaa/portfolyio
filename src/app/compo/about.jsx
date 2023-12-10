'use client'
import React from 'react';


export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-gray-400  to-gray-900 py-12 opacity-100" id="about">
        <div className='flex items-center justify-center text-center'>
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-900 text-center">About<br></br>
      <hr className='w-[30vw] bg-gradient-to-l from-blue-400 to-gray-900 h-[2px] ' /></h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex items-center">
          {/* <img className="w-48 h-48 rounded-full object-cover mr-8" src="https://via.placeholder.com/200" alt="Profile" /> */}
          <div className="mt-8 sm:mt-0">
       
            <p className="text-white mb-6">We are a group of students who are passionate about web development and are always looking for ways to learn and grow. Our goal is to create high-quality, responsive websites and applications that provide a seamless user experience.</p>
            <p className="text-white mb-6">We specialize in the latest web technologies such as HTML, CSS, JavaScript, React, and Node.js. We are constantly learning and exploring new technologies and techniques to improve our skills and create better projects.</p>
            <p className="text-white mb-6">If you have a project that you would like us to work on or if you just want to connect with us, feel free to contact us using the contact form or by sending us an email <a href="mailto:manshipatel.deep@gmail.com" className='text-gray-200'> manshipatel.deep@gmail.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
