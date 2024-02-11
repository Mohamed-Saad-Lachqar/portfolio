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
            As a passionate Computer Science student with a keen interest in web
            development, I am eager to embark on a transformative journey as I
            seek opportunities for a dynamic internship in the field. Committed
            to pushing the boundaries of innovation, I am driven by a genuine
            curiosity for creating engaging and user-centric web applications.
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

              <h2 className='text-[#833BE8] m-[10px]'>React js</h2>
            </div>

            <div className='w-[300px]'>
              <h2 className='text-[#833BE8] m-[10px] '>Tailwind css</h2>
              <h2 className='text-[#833BE8] m-[10px] '>C language</h2>
              <h2 className='text-[#833BE8] m-[10px] '>Git/github</h2>
              <h2 className='text-[#833BE8] m-[10px] '>Responsive Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
