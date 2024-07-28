import React from 'react'
import Lottie from "lottie-react";
import mail from "../assets/2.json";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <div id="contact" className="w-[100%] min-h-[100vh] pading">
      <div className="flex  justify-between w-[100%] flex-wrap">
        <div className=" basis-[400px] mt-[70px]">
          <h1 className="text-[60px] text-[#bbb] font-[600]">contact me</h1>
          <form
            action="#"
            className="flex justify-center items-center flex-col	"
          >
            <input
              type="text"
              className="w-[100%] border-[0] my-[15px] rounded-[10px] bg-[#36363C] p-[15px] text-[#bbb] "
              placeholder="Your Name :"
              required
            />
            <input
              type="email"
              className="w-[100%] border-[0] my-[15px] rounded-[10px] bg-[#36363C] p-[15px] text-[#bbb] "
              id="email"
              placeholder="Your Email :"
              required
            ></input>
            <textarea
              rows="6"
              className="w-[100%] border-[0] my-[15px] rounded-[10px] bg-[#36363C] p-[15px] text-[#bbb] "
              placeholder="your Message :"
              id="Message"
            ></textarea>
            <button
              className="mx-[10px] p-[13px] inline-block w-[170px] text-center font-[600] border-solid border-[2px] border-[#833BE8] text-[#eee] rounded-[15px] hover:shadow-[2px_2px_10px_2px_#833BE8] "
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
        <div className="basis-[500px] h-[100%] mt-[70px] flex flex-col justify-center items-center text-center">         
           <Lottie
            animationData={mail}
            className="w-[500px]  drop-shadow-[2px_10px_20px_#833BE8] mail"
          />
          <div className='w-[100%] flex justify-between flex-wrap'>
            <p className="text-[#eee] text-center">
              <FaPhoneAlt className=" inline text-[23px] text-[#833BE8] mx-[5px] " />
              +212 670-444541
            </p>
            <p className="text-[#eee] text-center">
              <IoIosMail className="inline text-[30px] text-[#833BE8] mx-[5px] " />
              mohamedsaadlachqar@gmail.com
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
