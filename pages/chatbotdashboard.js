import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome, FaPlus, FaMap, FaQuestionCircle, FaTrash } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatDisplay from "../components/chatdisplay";

export default function ChatbotDashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [submittedInput, setSubmittedInput] = useState('');
    const [inputField, setInputField] = useState(true);
    const [savedChats, setSavedChats] = useState([]);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
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

    const getCurrentChatData = () => {
        if (currentChatId){
            return savedChats.find(chat => chat.id === currentChatId)
        }
        return null
    }

    const saveChat = (businessTitle, userIdea, canvasData) => {
        const newChat = {
            id: Date.now(),
            businessTitle: businessTitle,
            userIdea: userIdea,
            canvasData: canvasData,
            createdAt: new Date().toISOString()
        }

        setSavedChats(prevChats => {
            const updatedChats = [...prevChats, newChat]
            return updatedChats
        })

    }

    const createNewChat = () => {
        if (savedChats.length == 5) {
            alert("You have reached the 5 chat limit. Delete a chat to create a new one.")
            return
        }
        setSubmittedInput("")
        setInputField(true)
        setUserInput("")
        setCurrentChatId(null)
    }

    const loadChat = (chatId) => {
        const chat = savedChats.find(chat => chat.id === chatId)
        if (chat) {
            setSubmittedInput(chat.userIdea)
            setInputField(false)
            setCurrentChatId(chat.id)
        }

    }

    const deleteChat = (chatId) => {
        setSavedChats(prevChats => {
            const updatedChats = prevChats.filter(chat => chat.id !== chatId)
            return updatedChats
        })

        if (currentChatId === chatId) {
            setSubmittedInput("")
            setInputField(true)
            setUserInput("")
            setCurrentChatId(null)
        }
    }

    const openChatMenu = () => {
        setHamburgerToggle((prev) => !prev)
    }

    useEffect(() => {
        const storedChats = localStorage.getItem("founderai-chats")
        if (storedChats) {
            setSavedChats(JSON.parse(storedChats));
        }
        setIsLoaded(true);
    },[])

    useEffect(() => {
        localStorage.setItem("founderai-chats", JSON.stringify(savedChats))
    }, [savedChats])

    return (
        <section className="flex justify-center w-screen h-screen overflow-x-hidden overflow-clip">
            <div className="flex flex-row justify-center">
                <div className={`flex justify-center items-center w-screen transitition-opacity duration-2000 ${isLoaded ? "opacity-100" : "opacity-0" }`}>
                    <div className={`flex flex-col w-85 h-full bg-gradient-to-r from-rose-500 to-red-700 p-8 pl-5 pr-5 border-white z-100 ${hamburgerToggle ? "max-[1335px]:absolute max-[1335px]:flex  max-[1335px]:left-0  max-[1335px]:z-100 max-[1335px]:pt-5" : "max-[1335px]:hidden"}`}>
                        {hamburgerToggle && (
                            <div className="mb-10" onClick={() => setHamburgerToggle(false)}/>
                        )}
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-inter font-extrabold text-center text-3xl">Chats</h1>
                            <h2 className="text-white bg-white/30 rounded-3xl mt-0.5 w-10 p-1.5 font-inter font-light text-center text-xl">{savedChats.length}</h2>
                        </div>
                        <div className="flex mt-5 justify-between items-center">
                            <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50" onClick={backToHome}>
                                <FaHome className="text-xl"/>
                                <h2 className="text-base">Home</h2>
                            </div>
                            <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50" onClick={createNewChat}>
                                <FaPlus className="text-xl"/>
                                <h2 className="text-base">New</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-10 mt-12 w-full">
                            {savedChats.map((chat) => (
                                <div className="flex cursor-pointer w-full h-10 hover:bg-white/20 hover:text-shadow-white/20 hover:text-shadow-xs p-5 rounded-2xl" key={chat.id} onClick={() => loadChat(chat.id)} >
                                    <div className="flex flex-row items-center gap-5 justify-center w-full hover">
                                        <p className="font-inter font-bold text-white w-55 text-nowrap overflow-hidden text-ellipsis">{chat.businessTitle}</p>
                                        <div className="w-fit h-fit font-inter font-light text-white" onClick={(e) => {
                                            e.stopPropagation()
                                            deleteChat(chat.id)
                                            }}>
                                            <FaTrash /> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-center gap-30 items-center w-fit h-fit mt-auto">
                            <img src="foundervision-logo.png" className="w-[40px] h-[40px] border-2 border-black rounded-4xl cursor-pointer" onClick={backToHome} />
                            <div className="flex gap-9">
                                <FaMap className="text-white w-[30px] h-[30px] cursor-pointer" />
                                <FaQuestionCircle className="text-white w-[30px] h-[30px] cursor-pointer" />
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
                            <RxHamburgerMenu className=" z-200 hidden max-[1335px]:flex ml-5 cursor-pointer" onClick={openChatMenu} />
                            <img src="founderai.png" className="w-25 h-25"/>
                            <h2 className="">FounderAI</h2>
                        </div>
                        <ChatDisplay userInput={submittedInput} onSaveChat={saveChat} currentChatData={getCurrentChatData()}  />
                        {inputField && (
                            <div className="flex justify-center w-full  mb-5">
                                <form onSubmit={handleUserInput} className="flex border-2 border-red-400 gap-2 rounded-3xl p-3 items-center">
                                    <textarea 
                                        rows = {4}
                                        className="text-white w-180 max-[950px]:w-130 max-[665px]:w-80 h-20 focus:outline-none focus:ring-0 resize-none font-inter font-light" 
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