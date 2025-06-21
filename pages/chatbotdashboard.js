import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome, FaPlus, FaMap, FaQuestionCircle, FaTrash } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ChatDisplay from "../components/chatdisplay";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function ChatbotDashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [submittedInput, setSubmittedInput] = useState('');
    const [inputField, setInputField] = useState(true);
    const [savedChats, setSavedChats] = useState([]);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const [clickableChats, setClickableChats] = useState(true);
    const [chatsAlert, setChatsAlert] = useState(false)
    const [inputAlert, setInputAlert] = useState(false)
    const [firstLoad, setFirstLoad] = useState(true);
    const [screenWidth, setScreenWidth] = useState(0);
    const router = useRouter();
    const backToHome = () => {
        router.push("/");
    }
    const guideOnClick = () => {
        router.push("/#guide")
    }
    const faqOnClick = () => {
        router.push("/#faq")
    }
    const handleUserInput = (e) => {
        e.preventDefault()
        if (userInput.trim() == "") {
            setInputAlert(true)
            return
        }
        setSubmittedInput(userInput)
        setInputField(false)
        setUserInput("")
        setInputAlert(false)
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
        if (savedChats.length >= 5) {
            setChatsAlert(true)
            return
        }
        setSubmittedInput("")
        setInputField(true)
        setUserInput("")
        setCurrentChatId(null)
        setInputAlert(false)
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

        if (currentChatId === chatId || (!currentChatId && submittedInput.length > 0)) {
            setSubmittedInput("")
            setInputField(true)
            setUserInput("")
            setCurrentChatId(null)
        }
        setChatsAlert(false)
    }

    const openChatMenu = () => {
        setHamburgerToggle((prev) => !prev)
    }

    useEffect(() => {
        const storedChats = localStorage.getItem("founderai-chats")
        if (storedChats) {
            const chats = JSON.parse(storedChats)
            setSavedChats(chats)
            if (chats.length === 5){
                setSubmittedInput(chats[0].userIdea)
                setInputField(false)
                setCurrentChatId(chats[0].id)
            }
        }
        setFirstLoad(false)
        setIsLoaded(true);
    },[])

    useEffect(() => {
        if (!firstLoad) {
            localStorage.setItem("founderai-chats", JSON.stringify(savedChats))
        }
    }, [savedChats, firstLoad])


    return (
        <section className="flex justify-center w-screen h-full overflow-x-hidden overflow-clip">
            <div className="flex flex-row justify-center">
                <div className={`flex justify-center items-center w-screen transitition-opacity duration-2000 ${isLoaded ? "opacity-100" : "opacity-0" }`}>
                    <div className={`flex flex-col w-[360px] h-screen bg-gradient-to-r from-rose-500 to-red-700 p-8 pl-5 pr-5 border-white z-100 overflow-hidden ${hamburgerToggle ? "max-[1335px]:absolute max-[1335px]:flex  max-[1335px]:left-0  max-[1335px]:z-100 max-[1335px]:pt-5" : "max-[1335px]:hidden"}`}>
                        {hamburgerToggle && (
                            <div className="max-[1335px]:mb-10 min-[1336px]:hidden" onClick={() => setHamburgerToggle(false)}/>
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
                            <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50" onClick={clickableChats ? createNewChat : null}>
                                <FaPlus className="text-xl"/>
                                <h2 className="text-base">New</h2>
                            </div>
                        </div>
                        {chatsAlert && (
                                <div className="grid w-full max-w-xl items-start gap-4 mt-5">
                                    <Alert variant="destructive" className="bg-white rounded-2xl text-red-500">
                                        <AlertTitle>You have hit the 5 chat limit.</AlertTitle>
                                        <AlertTitle >Delete a chat to create a new one.</AlertTitle>
                                    </Alert>
                                </div>
                            )}
                        <div className="flex flex-col gap-10 mt-12 w-full h-full">
                            {savedChats.map((chat) => (
                                <div className="flex cursor-pointer w-full h-10 hover:bg-white/20 hover:text-shadow-white/20 hover:text-shadow-xs p-5 rounded-2xl" key={chat.id} onClick={() => clickableChats ? loadChat(chat.id) : null} >
                                    <div className="flex flex-row items-center gap-5 justify-center w-full hover">
                                        <p className="font-inter font-bold text-white w-55 text-nowrap overflow-hidden text-ellipsis">{chat.businessTitle}</p>
                                        <div className="w-fit h-fit font-inter font-light text-white hover:text-red-400" onClick={(e) => {
                                            e.stopPropagation()
                                            deleteChat(chat.id)
                                            }}>
                                            <FaTrash /> 
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-center gap-30 self-center items-center w-fit h-fit mt-auto ">
                            <img src="foundervision-logo.png" className="w-[40px] h-[40px] border-2 border-black rounded-4xl cursor-pointer" onClick={backToHome} />
                            <div className="flex gap-9">
                                <FaMap className="text-white w-[30px] h-[30px] cursor-pointer hover:text-red-400" onClick={guideOnClick}/>
                                <FaQuestionCircle className="text-white w-[30px] h-[30px] cursor-pointer hover:text-red-400" onClick={faqOnClick} />
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
                            <RxHamburgerMenu className="z-200 min-[1336px]:hidden ml-5 cursor-pointer" onClick={openChatMenu} />
                            <img src="founderai.png" className="w-25 h-25"/>
                            <h2 className="">FounderAI</h2>
                        </div>
                        <ChatDisplay userInput={submittedInput} onSaveChat={saveChat} currentChatData={getCurrentChatData()} setClickableChats={setClickableChats} showAlert={inputAlert}  />
                        {inputField && (
                            <div className="flex justify-center w-full mb-5">
                                <form onSubmit={handleUserInput} className="flex border-2 border-red-400 gap-2 rounded-3xl p-3 items-center">
                                    <textarea
                                        rows = {4}
                                        className="text-white w-180 max-[950px]:w-130 max-[665px]:w-80 max-[450px]:w-70 h-20 focus:outline-none focus:ring-0 resize-none font-inter font-light" 
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