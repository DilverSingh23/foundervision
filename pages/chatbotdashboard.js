import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome, FaPlus, FaMap, FaQuestionCircle } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import ChatDisplay from "../components/chatdisplay";

export default function ChatbotDashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [submittedInput, setSubmittedInput] = useState('');
    const [inputField, setInputField] = useState(true);
    const router = useRouter();
    const backToHome = () => {
        router.push("/");
    }
    const handleUserInput = (e) => {
        e.preventDefault()
        if (userInput.trim() == "") {
            alert("You can't submit an empty idea!")
            return
        }
        setSubmittedInput(userInput)
        setInputField(false)
        setUserInput("")
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter" && !e.shiftKey) {
            handleUserInput(e)
        }
    }

    useEffect(() => {
        setIsLoaded(true);
    },[])
    return (
        <section className="justify-center w-screen h-screen overflow-x-hidden">
            <div className="flex flex-row justify-center">
                <div className="flex ml-10 gap-10 flex-col justify-center items-center bg-black h-screen w-screen p-5 cursor-pointer">
                    <img src="foundervision-logo.png" className="w-10" onClick={backToHome} />
                    <FaMap className="text-red-500" />
                    <FaQuestionCircle className="text-red-500" />
                </div>
                <div className={`flex justify-center items-center w-screen transitition-opacity duration-2000 ${isLoaded ? "opacity-100" : "opacity-0" }`}>
                    <div className="flex-col w-100 h-screen bg-gradient-to-r from-rose-500 to-red-700 p-8">
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-inter font-extrabold text-center text-3xl">Chats</h1>
                            <h2 className="text-white bg-white/30 rounded-3xl mt-0.5 w-10 p-1.5 font-inter font-light text-center text-xl">1</h2>
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50">
                                <FaHome className="text-xl"/>
                                <h2 className="text-base" onClick={backToHome}>Home</h2>
                            </div>
                            <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50">
                                <FaPlus className="text-xl"/>
                                <h2 className="text-base">New</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-screen w-screen bg-[#0D1117]" style = {{
                        backgroundImage: `url('/chatbotbg.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '500px',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}>
                        <div className="w-full h-20 flex items-center text-white font-inter text-xl font-bold border-b-2 border-b-red-400 bg-black">
                            <img src="founderai.png" className="w-25 h-25"/>
                            <h2 className="">FounderAI</h2>
                        </div>
                        <ChatDisplay userInput={submittedInput} />
                        {inputField && (
                            <div className="flex justify-center w-full mb-5">
                                <form onSubmit={handleUserInput} className="flex border-2 border-red-400 gap-2 rounded-3xl p-3 items-center">
                                    <textarea 
                                        rows = {4}
                                        className="text-white w-180 h-20 focus:outline-none focus:ring-0 resize-none font-inter font-light" 
                                        placeholder="What is your business idea?"
                                        value = { userInput }
                                        onChange={e => setUserInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                    />
                                    <button type="submit" className="bg-red-500 hover:bg-red-400 cursor-pointer text-white p-3 rounded-3xl h-10 self-end">
                                        <IoRocketSharp className="text-white" />
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}