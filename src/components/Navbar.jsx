import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="fixed z-[999] w-full flex py-[20px] px-[10%] items-center justify-center bg-[transparent]">
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
