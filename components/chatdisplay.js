'use client' 
import React, { useEffect, useState, useRef } from "react";
import UserMessage from "./usermessage";
import AiMessage from "./aimessage";
import Typing from "./typing";
import BusinessCanvas from "./businesscanvas";
import MainButton from "./mainbutton";
import { IoIosCloseCircle, IoIosDownload } from "react-icons/io";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const chatdisplay = ({ userInput, onSaveChat, currentChatData, setClickableChats, showAlert }) => {
    const [show, setShow] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [canvasData, setCanvasData] = useState(null);
    const [error, setError] = useState("");
    const [viewing, setViewing] = useState(false)
    const startMessage = "Hey, I'm FounderAI🚀! Input your business idea in as much detail as possible and I will help you generate it into reality!";
    const generatingMessage = "Got it! I'm generating a business canvas based on your idea 🎨.";
    const completionMessage = "Done ✅! Click the download button at the bottom to download your business canvas. Good luck with your startup journey and create a new chat if you want to generate another!"
    const userInputDisplay = currentChatData ? currentChatData.userIdea : userInput 
    const bottomOfChat = useRef(null);
    const canvas = useRef(null);

    useEffect(() => {
        if (currentChatData) {
            setCanvasData(currentChatData.canvasData)
            setShow(true)
        }
        else {
            setCanvasData("")
            setShow(false)
            setError("")
        }
        setViewing(false)
    }, [currentChatData])

    useEffect(() => {
        setViewing(false)
        if (!currentChatData && userInput.length > 0) {
            setCanvasData(null)
            setTimeout(() => {
                setShow(true)
                generateCanvas(userInput)
            }, 1800)
            clearTimeout()
        }
    }, [userInput, currentChatData])

    useEffect(() => {
        if (bottomOfChat.current) {
            bottomOfChat.current.scrollIntoView({behavior: "smooth"})
        }
        if (isGenerating) {
            setClickableChats(false)
        }
        else {
            setClickableChats(true)
        }
    }, [isGenerating])


    const generateCanvas = async (userInput) => {
        setIsGenerating(true)

        try {
            const response = await fetch('/api/generate-canvas', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({businessIdea: userInput})
            })

            const result = await response.json()

            if (response.ok) {
                setCanvasData(result.data)
                onSaveChat(result.data.businessTitle, userInput, result.data)
            }
            else {
                setError(result.error || "Error generating canvas.") 
            }
        } catch (err) {
            setError("Error: ", err)
        } finally {
            setIsGenerating(false)
        }

    }

    const handleDownload = async() => {
        const element = canvas.current
        if (!element) return
        const originalWidth = element.style.width
        element.style.width = "1200px"
        const screenshot = await html2canvas(element)
        const image = screenshot.toDataURL("image/png", 1.0)
        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [screenshot.width, screenshot.height]
        })
        pdf.addImage(image, "PNG", 0, 0, screenshot.width, screenshot.height)
        pdf.save(`${canvasData.businessTitle || "your"}-canvas.pdf`)
        element.style.width = originalWidth
    }

    const viewingCanvas = () => {
        setViewing(true)
    }

    const notViewingCanvas = () => {
        setViewing(false)
    }


    return (
        <div className="flex flex-col w-250 min-h-0 flex-1 self-center overflow-auto mt-5 scroll-behavior-smooth scrollbar-gutter-stable p-10 pt-0 overflow-x-scroll gap-10 max-[950px]:w-180 max-[665px]:w-120 max-[450px]:w-110 max-[450px]:pl-8">
            <AiMessage output = {startMessage} first={true} />
            {showAlert && (
                <AiMessage output="You can't submit an empty idea!" first={false} />
            )}
            {userInputDisplay.length > 0 && (
                <>
                    <UserMessage message={userInputDisplay} />
                    {show && (
                        <AiMessage output={generatingMessage} first={true} className="opacity-0 transition-opacity duration-1000" />
                    )}

                    {isGenerating && (
                        <div className="flex items-center">
                            <img src="/founderai.png" className="w-25 h-25 self-center"/>
                            <Typing />
                        </div>
                    )}

                    {error && (
                        <AiMessage output = {error} first={false} />
                    )}

                    {canvasData && !viewing && !isGenerating && (
                        <>
                            <div className="relative w-fit bg-cover bg-no-repeat rounded-4xl ml-25" style={{backgroundImage: "url('/canvas-skeleton.png')", backgroundPosition: "center"}}>
                                <img src="/canvas-skeleton.png" alt="canvas" className="h-115 w-95 ml-25 opacity-0 max-[665px]:h-75 max-[665px]:w-85 "/>
                                <h1 className="text-white font-inter font-extrabold w-100 max-[665px]:w-65 text-center absolute text-xl max-[665px]:text-[16px] left-10 max-[665px]:left-5 max-[450px]:left-1 max-[665px]:bottom-50 bottom-80 border-4 border-red-500 bg-black rounded-4xl p-5 max-[450px]:p-l-0 max-[450px]:p-r-0 z-15">
                                    {canvasData ? canvasData.businessTitle : ""}
                                </h1>
                                <div className="flex flex-col gap-5 absolute left-35 max-[665px]:left-14 max-[450px]:left-10 bottom-35 max-[665px]:bottom-25 max-[450px]:bottom-20 z-15 ">
                                    <MainButton name="View/Download" onClick={viewingCanvas} />
                                </div>
                            </div>
                            <AiMessage output={completionMessage} first={true}/>
                        </>
                    )}
                    {viewing && (
                        <div className="w-full h-full">
                            <div ref={canvas} className="max-[665px]:w-300">
                                <BusinessCanvas canvasData={canvasData}/>
                            </div>
                            <div className="flex items-center gap-1 w-fit h-fit text-white text-lg cursor-pointer font-extralight mb-5 mt-3 ">
                                <button className="flex gap-3 items-center bg-white rounded-4xl p-3 cursor-pointer  hover:bg-gray-200" onClick={notViewingCanvas}>
                                    <IoIosCloseCircle className="rounded-4xl text-2xl text-red-500" onClick={notViewingCanvas}/>
                                    <h1 className="text-black">Close Canvas</h1>
                                </button>
                                <button className="flex gap-3 items-center bg-white rounded-4xl p-3 cursor-pointer hover:bg-gray-200" onClick={handleDownload}>
                                    <IoIosDownload className="rounded-4xl text-2xl text-red-500" /> 
                                    <h1 className="text-black">Download</h1>
                                </button>
                            </div>
                            <AiMessage output={completionMessage} first={true}/>
                        </div> 
                    )}
                </>
            )}
            <div ref={bottomOfChat} />
        </div>
    )
}


export default chatdisplay