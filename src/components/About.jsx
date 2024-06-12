import React from 'react'
import Aboutpic from '../assets/about.png'
export default function About() {
  return (
    <div id="about" className="min-h-[100vh] pading w-[100%]">
      <div className="w-[100%] mt-[50px] flex justify-between flex-wrap">
        <div className="basis-[35%] drop-shadow-[5px_5px_20px_#833BE8]">
          <img src={Aboutpic} alt="#" className="w-[100%] rotateY mt-[30px]" />
        </div>
        <div className="basis-[60%] p-[10px]">
          <h1 className="text-[60px] text-[#bbb] font-[600]">about me</h1>
          <p className="my-[20px] text-[#eee]">
            I am a web developer and computer science student who
             is looking for a web development job. I have experience in
              creating web applications using PHP, JavaScript, React,
               SQL, HTML, CSS, and Tailwind CSS. I can create user-friendly 
               websites and interactive web applications. I also manage databases
                to keep everything running smoothly. I am excited to use my skills 
                to work on new projects in a professional environment.
          </p>
          <h1 className="my-[20px] text-[30px] text-[#bbb] font-[600]">
            education :
          </h1>
          <div>
            <h2 className="text-[#833BE8]">
              High Scool Deploma, Mathimatique (bac sm)
            </h2>
            <p className="my-[5px] text-[#eee]">
              Abdellah Chefchaouni Highschool, Oulad Teima
            </p>
            <h2 className="text-[#833BE8]">Computer Science(now) </h2>
            <p className="my-[5px] text-[#eee]">
              High Institute Of Tecnology-Agadir(EST Agadir)
            </p>
          </div>
          <h1 className="my-[20px] text-[30px] text-[#bbb] font-[600]">
            skills :
          </h1>
          <div className='flex'>
            <div className='w-[300px]'>
              <h2 className='text-[#833BE8] m-[10px]'>HTML</h2>

              <h2 className='text-[#833BE8] m-[10px]'>CSS</h2>

              <h2 className='text-[#833BE8] m-[10px]'>Javascript</h2>

              <h2 className='text-[#833BE8] m-[10px]'>PHP</h2>

              <h2 className='text-[#833BE8] m-[10px]'>React js</h2>

              <h2 className='text-[#833BE8] m-[10px]'>SQL</h2>
            </div>

            <div className='w-[300px]'>
              <h2 className='text-[#833BE8] m-[10px] '>Tailwind css</h2>

              <h2 className='text-[#833BE8] m-[10px] '>Wordpress</h2>

              <h2 className='text-[#833BE8] m-[10px] '>Elementor</h2>

              <h2 className='text-[#833BE8] m-[10px] '>Git/github</h2>

              <h2 className='text-[#833BE8] m-[10px] '>Responsive Design</h2>
              
              <h2 className='text-[#833BE8] m-[10px] '>C language</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
