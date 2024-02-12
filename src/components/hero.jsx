import React from 'react'
import animation1 from '../assets/1.json'
import Lottie from 'lottie-react';
import pdf from '../assets/Mohamed-Saad_Lachqar.pdf'
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="w-full min-h-[100vh]  text-[#ddd] pading relative">
      <div className="mt-[18%] relative z-[100]">
        <h1 className=" font-[700] text-[35px]">
          Hi,I'm Saad a <br /> CS student , Front End Developer{" "}
        </h1>
        <p className="w-[600px] text-[#9F9DA7] my-[20px]">
          I'm Mohamed-Saad a computer science student who loves building
          websites. I'm good at making them work smoothly and look cool, using
          both technical skills and creative problem-solving
        </p>
        <div className="my-[20px]">
          <a href="#">
            <FaGithub className="text-[#9F9DA7] text-[30px] inline m-[10px]" />
          </a>
          <a href="#">
            <FaLinkedin className="text-[#9F9DA7] text-[30px] inline m-[10px]" />
          </a>
        </div>
        <div className="mt-[40px]">
          <div className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[15px] hover:shadow-[2px_2px_10px_2px_#833BE8] bg-[#833BE8] text-[#19181C]">
            <a href="#">Contact me</a>
          </div>
          <div className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[15px] hover:shadow-[2px_2px_10px_2px_#833BE8] ">
            <a href={pdf} download>Download CV</a>
          </div>
        </div>
      </div>
      <Lottie
        animationData={animation1}
        className="w-[500px] absolute z-[100] top-[170px] left-[60%] drop-shadow-[2px_10px_20px_#833BE8]"
      />
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
