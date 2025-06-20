import { useRouter } from "next/router";
import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const footer = ({ guideOnClick, faqOnClick, foundersOnClick, backToHome }) => {
    const router = useRouter();
    const toChatbotDashboard = () => {
        router.push("/chatbotdashboard")
    }
    return (
        <div className="flex flex-col items-start 3xl:items-center h-105 w-full mt-50 bg-[#0A0D13]">
            <div className="flex justify-center gap-1.5 md:gap-2.5 mt-10 ml-20 cursor-pointer" onClick={backToHome}>
                <img src="/foundervision-logo.png" alt="FounderVision" className="w-10 m:w-25" />
                <h1 className="text-white mt-3 md:mt-2 font-inter font-extrabold text-s md:text-xl">FounderVision</h1>
            </div>
            <div className="flex mm:gap-10 md:gap-30 lg:gap-50 2xl:gap-75">
                <ul className="flex flex-col gap-5 text-white font-inter font-normal ml-8 2xs:ml-10 ss:ml-21 mt-10">
                    <li className="cursor-pointer hover:text-red-500" onClick={backToHome}>Home</li>
                    <li className="cursor-pointer hover:text-red-500" onClick={toChatbotDashboard}>Chatbot</li>
                    <li className="cursor-pointer hover:text-red-500" onClick={guideOnClick}>Guide</li>
                    <li className="cursor-pointer hover:text-red-500" onClick={faqOnClick}>FAQ</li>
                </ul>
                <ul className="flex flex-col gap-5 text-white font-inter font-normal ml-8 xss:ml-21 mt-10">
                    <li className="cursor-pointer hover:text-red-500" onClick={foundersOnClick}>Founders</li>
                    <a href="https://techincubatorqc.com/">
                        <li className="cursor-pointer hover:text-red-500">Tech Incubator</li>
                    </a>
                    <li className="cursor-pointer hover:text-red-500">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-red-500">Contact</li>
                </ul>
                <div className="flex flex-col 1_5xl:ml-70">
                    <h1 className="text-white font-inter font-bold text-center text-2xl">Social</h1>
                    <ul className="flex flex-col gap-5 text-white font-inter font-light ml-10 mt-8">
                        <a href="https://www.instagram.com/qctechincubator/">
                            <li className="flex gap-3 no-underline">
                                <FaInstagram className="text-red-400 mt-1 hover:text-red-500" />
                                <h3 className="text-gray-200 text-base font-inter font-bold no-underline hover:text-white cursor-pointer">Instagram</h3>
                            </li>
                        </a>
                        <a href="https://www.facebook.com/QCTechIncubator/">
                            <li className="flex gap-3 no-underline">
                                <FaFacebook className="text-red-400 mt-1 hover:text-red-500" />
                                <h3 className="text-gray-200 text-base font-inter font-bold no-underline hover:text-white cursor-pointer">Facebook</h3>
                            </li>
                        </a>
                        <a href="https://x.com/qctechincubator?lang=en">
                            <li className="flex gap-3">
                                <FaTwitter className="text-red-400 mt-1 hover:text-red-500" />
                                <h3 className="text-gray-200 text-base font-inter font-bold no-underline hover:text-white cursor-pointer">Twitter</h3>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="text-gray-400 flex flex-row gap-1 font-inter font-extralight text-s ml-15 2xs:ml-21 mt-20">
                <h3>All Rights Reserved | Copyright © 2025 </h3>
            </div>
        </div>
    )
}

export default footer