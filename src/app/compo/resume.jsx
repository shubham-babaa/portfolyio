'use client '
import React from 'react';

const pdf_file_url='http://localhost:3000/resume.pdf';
export default function Resume() {

  const download=(url)=>{
const atag=document.createElement("a");
atag.href=url;
atag.setAttribute("download","resume.pdf")
document.body.appendChild(atag);
atag.click();
atag.remove();
  }
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900  py-12" id="resume">
      <div className='flex items-center justify-center'>
      <h2 className="text-3xl font-bold mb-10 text-pink-800 text-center">Resume<br></br>
        <hr className='w-[30vw] ' /></h2>
      </div>
       
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex items-center">
          <div className="w-full sm:w-1/2">
          
            <h3 className="text-2xl font-bold mb-2 text-white">Education</h3>
            <div className="mb-4 ">
              <p className="font-bold text-blue-900">Bachelor of Technology in Information Technology</p>
              <p className="text-gray-600">National Institute of Technology Srinagar</p>
              <p className="text-gray-600">2021-2025</p>
            </div>
            <h3 className="text-2xl font-bold mb-2  text-white">Skills</h3>
            <div className="mb-4">
              <p className="font-bold text-blue-900">Web Development</p>
              <p className="text-gray-600">HTML, CSS, JavaScript, React, Node.js</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-blue-900">Programming Languages</p>
              <p className="text-gray-600">C++, Python</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <button onClick={()=>{download(pdf_file_url)}}  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
