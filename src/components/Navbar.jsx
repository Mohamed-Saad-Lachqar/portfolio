import React from 'react'
import { useState } from 'react';
export default function Navbar() {
  
const [top, setTop] = useState("top-0");
let prevScrollpos = window.scrollY;
window.addEventListener("scroll",() =>{
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    setTop("top-0");
  } else {
    setTop("top-[-150px]");
  }
  prevScrollpos = currentScrollPos;
}) 
  return (
    <div>
      <nav className={`fixed z-[999] duration-[1s] ${top} w-full flex py-[10px] px-[10%] items-center justify-center bg-[transparent]`}>
        <ul className="rounded-[50px] w-[500px] bg-[#36363C] py-[5px] px-[20px] flex items-center justify-between">
          <li className="inline-block my-[10px] mx-[25px] text-center">
            <a href="./" className="text-[#BBB] font-[600px] ">
              home
            </a>
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-center">
            <a href="#about" className="text-[#BBB] font-[600px] ">
              about
            </a>
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-center">
            <a href="#projects" className="text-[#BBB] font-[600px] ">
              projects
            </a>
          </li>
          <li className="inline-block my-[10px] mx-[20px] text-center">
            <a href="#contact" className="text-[#BBB] font-[600px] ">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
