import React, { useState } from 'react'
import Prj1_1 from "../assets/prj1-1.png";
import Prj1_2 from "../assets/prj1-2.png";
import Prj1_4 from "../assets/prj1-4.png";
import Prj2_1 from "../assets/prj2-1.png";
import Prj2_2 from "../assets/prj2-2.png";
import Prj2_3 from "../assets/prj2-3.png";
import Prj3_1 from "../assets/prj3-1.png";
import Prj3_2 from "../assets/prj3-2.png";
import Prj3_3 from "../assets/prj3-3.png";
import Prj4_1 from "../assets/prj4-1.png";
import Prj4_2 from "../assets/prj4-2.png";
import Prj4_3 from "../assets/prj4-3.png";
import { FaHtml5,FaReact, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
export default function Projects() {
  const [frontpage1, setfrontpage1] = useState("rotateY");
  const [frontpage2, setfrontpage2] = useState("rotateY");
  const [frontpage3, setfrontpage3] = useState("rotateY");
  const [zindexPfront1, setzindexPfront1] = useState("z-[6]");
  const [zindexPback1, setzindexPback1] = useState("z-[5]");
  const [zindexPfront2, setzindexPfront2] = useState("z-[4]");
  const [zindexPback2, setzindexPback2] = useState("z-[3]");
  const [zindexPfront3, setzindexPfront3] = useState("z-[2]");
  const [zindexPback3, setzindexPback3] = useState("z-[1]");
  

  return (
    <div
      id="projects"
      className="min-h-[100vh] w-full pading flex justify-center items-center"
    >
      <div className="w-[60rem] h-[42rem] relative perspective ">
        <div className="w-[50%] h-[100%] bg-[#833BE8] shadow-[0_0_60px_-0.6rem_rgba(0,0,0,0.2)] origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem] z-[-1]">
          <div className="absolute pading top-[2.5%] right-0 w-[95%] h-[95%] bg-[#eee]  origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ">
            <div className="w-[100%] h-[450px] relative rounded-[10px] ">
              <img
                src={Prj1_1}
                alt="#"
                className="rounded-[10px] absolute top-0 left-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj1_4}
                alt="#"
                className="rounded-[10px] absolute top-[150px] right-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj1_2}
                alt="#"
                className="rounded-[10px] absolute top-[300px] left-0 w-[300px] h-[170px]"
              />
            </div>
            <div className="w-[100%] mt-[30px] flex justify-center items-center">
              <a
                href="https://github.com/Mohamed-Saad-Lachqar/DesignHub"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] hover:bg-[#eee] hover:text-[#833BE8] bg-[#833BE8] text-[#eee]"
              >
                source code
              </a>
              <a
                href="https://mohamed-saad-lachqar.github.io/DesignHub/"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] bg-[#eee] text-[#833BE8] hover:bg-[#833BE8] hover:text-[#eee]"
              >
                live preview
              </a>
            </div>
            <div className="absolute bottom-[5px] left-[50%]">1</div>
          </div>
          <div
            className={`absolute ${zindexPfront1} top-[2.5%] right-0 w-[95%] h-[95%] bg-[#eee]  origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage1}`}
          >
            <div className="w-[100%] h-[100%] revrotate pading">
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                Project description :
              </h1>
              <p className="text-[#596069]">
                Designed and developed a dynamic and visually engaging Graphic
                Designer landing page using HTML, CSS, and JavaScript. This
                project showcases my skills, creativity, and experience in web
                development through an interactive and user-friendly web
                interface
              </p>
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                created using :
              </h1>
              <div className="mt-[15px]">
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaHtml5 className="text-[70px] " />
                  <p>HTML</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaCss3Alt className="text-[70px] " />
                  <p>CSS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <TbBrandJavascript className="text-[70px] " />
                  <p>JS</p>
                </div>
              </div>
              <div className="absolute bottom-[5px] left-[50%]">2</div>

              <div
                className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] right-[10px]"
                onClick={() => {
                  setfrontpage1("");
                  setzindexPback1("z-[2]");
                  setzindexPfront1("z-[1]");
                }}
              >
                next project <FaArrowRight className="mx-[5px]" />
              </div>
            </div>
          </div>
          <div
            className={`absolute pading top-[2.5%] ${zindexPback1} right-0 w-[95%] h-[95%] bg-[#eee] shadow-[0_0_60px_-0.6rem_rgba(0,0,0,0.2)] origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage1}`}
          >
            <div className="w-[100%] h-[450px] relative rounded-[10px] ">
              <img
                src={Prj2_1}
                alt="#"
                className="rounded-[10px] absolute top-0 left-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj2_3}
                alt="#"
                className="rounded-[10px] absolute top-[150px] right-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj2_2}
                alt="#"
                className="rounded-[10px] absolute top-[300px] left-0 w-[300px] h-[170px]"
              />
            </div>
            <div className="w-[100%] mt-[30px] flex justify-center items-center">
              <a
                href="https://github.com/Mohamed-Saad-Lachqar/MSLbooks"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] hover:bg-[#eee] hover:text-[#833BE8] bg-[#833BE8] text-[#eee]"
              >
                source code
              </a>
              <a
                href="https://mohamed-saad-lachqar.github.io/MSLbooks/"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] bg-[#eee] text-[#833BE8] hover:bg-[#833BE8] hover:text-[#eee]"
              >
                live preview
              </a>
            </div>
            <div className="absolute bottom-[5px] left-[50%]">3</div>

            <div
              className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] left-[10px]"
              onClick={() => {
                setfrontpage1("rotateY");
                setzindexPback1("z-[5]");
                setzindexPfront1("z-[6]");
              }}
            >
              <FaArrowLeft className="mx-[5px]" />
              prev project
            </div>
          </div>
          <div
            className={`absolute ${zindexPfront2} top-[2.5%] right-0 w-[95%] h-[95%] bg-[#eee]  origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage2}`}
          >
            <div className="w-[100%] h-[100%] revrotate pading">
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                Project description :
              </h1>
              <p className="text-[#596069]">
                The Online Library Platform is a modern web application designed
                to provide users with a seamless and engaging experience for
                discovering and exploring a vast collection of books. Built
                using React.js and styled with Tailwind CSS, this platform
                leverages an existing API to dynamically fetch and display book
                data.
              </p>
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                created using :
              </h1>
              <div className="mt-[15px]">
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaHtml5 className="text-[70px] " />
                  <p>HTML</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaCss3Alt className="text-[70px] " />
                  <p>CSS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <TbBrandJavascript className="text-[70px] " />
                  <p>JS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaReact className="text-[70px] " />
                  <p>React JS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <SiTailwindcss className="text-[70px] " />
                  <p>Tailwind</p>
                </div>
              </div>
              <div className="absolute bottom-[5px] left-[50%]">4</div>
              <div
                className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] right-[10px]"
                onClick={() => {
                  setfrontpage2("");
                  setzindexPback2("z-[4]");
                  setzindexPfront2("z-[3]");
                }}
              >
                next project <FaArrowRight className="mx-[5px]" />
              </div>
            </div>
          </div>
          <div
            className={`absolute pading top-[2.5%] ${zindexPback2} right-0 w-[95%] h-[95%] bg-[#eee] shadow-[0_0_60px_-0.6rem_rgba(0,0,0,0.2)] origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage2}`}
          >
            <div className="w-[100%] h-[450px] relative rounded-[10px] ">
              <img
                src={Prj3_1}
                alt="#"
                className="rounded-[10px] absolute top-0 left-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj3_3}
                alt="#"
                className="rounded-[10px] absolute top-[150px] right-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj3_2}
                alt="#"
                className="rounded-[10px] absolute top-[300px] left-0 w-[300px] h-[170px]"
              />
            </div>
            <div className="w-[100%] mt-[30px] flex justify-center items-center">
              <a
                href="https://github.com/Mohamed-Saad-Lachqar/Marks-Management-Platform"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] hover:bg-[#eee] hover:text-[#833BE8] bg-[#833BE8] text-[#eee]"
              >
                source code
              </a>
              <a
                href="https://mohamed-saad-lachqar.github.io/Marks-Management-Platform/"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] bg-[#eee] text-[#833BE8] hover:bg-[#833BE8] hover:text-[#eee]"
              >
                live preview
              </a>
            </div>
            <div className="absolute bottom-[5px] left-[50%]">5</div>
            <div
              className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] left-[10px]"
              onClick={() => {
                setfrontpage2("rotateY");
                setzindexPback2("z-[3]");
                setzindexPfront2("z-[4]");
              }}
            >
              <FaArrowLeft className="mx-[5px]" /> prev project
            </div>
          </div>
          <div
            className={`absolute  ${zindexPfront3} top-[2.5%] right-0 w-[95%] h-[95%] bg-[#eee]  origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage3}`}
          >
            <div className="w-[100%] h-[100%] revrotate pading">
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                Project description :
              </h1>
              <p className="text-[#596069]">
                a web interface for managing students notes with login and sign
                up pages. The interface allows users to generate their report
                card after completing their own information
              </p>
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                created using :
              </h1>
              <div className="mt-[15px]">
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaHtml5 className="text-[70px] " />
                  <p>HTML</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaCss3Alt className="text-[70px] " />
                  <p>CSS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <TbBrandJavascript className="text-[70px] " />
                  <p>JS</p>
                </div>
              </div>{" "}
              <div className="absolute bottom-[5px] left-[50%]">6</div>
              <div
                className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] right-[10px]"
                onClick={() => {
                  setfrontpage3("");
                  setzindexPback3("z-[6]");
                  setzindexPfront3("z-[5]");
                }}
              >
                next project
                <FaArrowRight className="mx-[5px]" />
              </div>
            </div>
          </div>
          <div
            className={`absolute pading top-[2.5%] ${zindexPback3} right-0 w-[95%] h-[95%] bg-[#eee] shadow-[0_0_60px_-0.6rem_rgba(0,0,0,0.2)] origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  ${frontpage3}`}
          >
            <div className="w-[100%] h-[450px] relative rounded-[10px] ">
              <img
                src={Prj4_1}
                alt="#"
                className="rounded-[10px] absolute top-0 left-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj4_3}
                alt="#"
                className="rounded-[10px] absolute top-[150px] right-0 w-[300px] h-[170px]"
              />
              <img
                src={Prj4_2}
                alt="#"
                className="rounded-[10px] absolute top-[300px] left-0 w-[300px] h-[170px]"
              />
            </div>
            <div className="w-[100%] mt-[30px] flex justify-center items-center">
              <a
                href="https://github.com/Mohamed-Saad-Lachqar/MSLSHOP"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] hover:bg-[#eee] hover:text-[#833BE8] bg-[#833BE8] text-[#eee]"
              >
                source code
              </a>
              <a
                href="https://mohamed-saad-lachqar.github.io/MSLSHOP/"
                className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] rounded-[10px] bg-[#eee] text-[#833BE8] hover:bg-[#833BE8] hover:text-[#eee]"
              >
                live preview
              </a>
            </div>{" "}
            <div className="absolute bottom-[5px] left-[50%]">7</div>
            <div
              className="absolute border-solid border-[2px] border-[#833BE8] flex justify-center items-center text-center font-[500] rounded-[5px] p-[5px] h-[50px] text-[#833BE8]  bottom-[10px] left-[10px]"
              onClick={() => {
                setfrontpage3("rotateY");
                setzindexPback3("z-[1]");
                setzindexPfront3("z-[2]");
              }}
            >
              <FaArrowLeft className="mx-[5px]" /> prev project
            </div>
          </div>
          <div
            className={`absolute  z-[0] top-[2.5%] right-0 w-[95%] h-[95%] bg-[#eee]  origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem]  rotateY`}
          >
            <div className="w-[100%] h-[100%] revrotate pading">
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                Project description :
              </h1>
              <p className="text-[#596069]">
                a web interface for managing students notes with login and sign
                up pages. The interface allows users to generate their report
                card after completing their own information
              </p>
              <h1 className="text-[20px] mt-[25px] font-[500] text-[#4B525B]">
                created using :
              </h1>
              <div className="mt-[15px]">
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaHtml5 className="text-[70px] " />
                  <p>HTML</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaCss3Alt className="text-[70px] " />
                  <p>CSS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <TbBrandJavascript className="text-[70px] " />
                  <p>JS</p>
                </div>

                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <FaReact className="text-[70px] " />
                  <p>React JS</p>
                </div>
                <div className="m-[5px] font-[600] inline-block text-[#833BE8] border-solid border-[3px] rounded-[10px] text-center border-[#833BE8] p-[5px]">
                  <SiTailwindcss className="text-[70px] " />
                  <p>Tailwind</p>
                </div>
              </div>
              <div className="absolute bottom-[5px] left-[50%]">8</div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-[#833BE8] shadow-[0_0_60px_-0.6rem_rgba(0,0,0,0.2)] origin-right rounded-tl-[0.6rem] rounded-bl-[0.6rem] z-[-1] back-cover"></div>
      </div>
    </div>
  );
}
