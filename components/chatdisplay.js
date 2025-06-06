import React, { useEffect, useState, useRef } from "react";
import UserMessage from "./usermessage";
import AiMessage from "./aimessage";
import Typing from "./typing";
import BusinessCanvas from "./businesscanvas";
import MainButton from "./mainbutton";
import { IoIosCloseCircle } from "react-icons/io";

const chatdisplay = ({ userInput }) => {
    const [show, setShow] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [canvasData, setCanvasData] = useState(null);
    const [error, setError] = useState("");
    const [viewing, setViewing] = useState(false)
    const startMessage = "Hey, I'm FounderAI🚀! Input your business idea in as much detail as possible and I will help you generate it into reality!";
    const generatingMessage = "Got it! I'm generating a business canvas based on your idea 🎨.";
    const completionMessage = "Done ✅! Click the download button at the bottom to download your business canvas. Good luck with your startup journey and create a new chat if you want to generate another!"
    const bottomOfChat = useRef(null);

    useEffect(() => {
        if (userInput.length > 0) {
            setTimeout(() => {
                setShow(true)
                generateCanvas(userInput)
            }, 1500)
            clearTimeout()
        }
    }, [userInput])

    useEffect(() => {
        if (bottomOfChat.current) {
            bottomOfChat.current.scrollIntoView({behavior: "smooth"})
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

    const viewingCanvas = () => {
        setViewing(true);
    }

    const notViewingCanvas = () => {
        setViewing(false);
    }

    return (
        <div className="flex flex-col w-250 h-11/12 self-center overflow-auto mt-5 scroll-behavior-smooth scrollbar-gutter-stable p-10 pt-0 overflow-x-hidden gap-10 ">
            <AiMessage output = {startMessage} first={true} />
            {userInput.length > 0 && (
                <>
                    <UserMessage message={userInput} />
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

                    {canvasData && !viewing && (
                        <>
                            <div className="relative w-fit bg-cover bg-no-repeat rounded-4xl ml-25" style={{backgroundImage: "url('/canvas-skeleton.png')"}}>
                                <img src="/canvas-skeleton.png" alt="canvas" className="h-115 w-95 ml-25 opacity-0 "/>
                                <div className="absolute inset-0 bg-black opacity-20 left-0" />
                                <h1 className="text-white font-inter font-extrabold w-100 text-center absolute text-xl left-10 bottom-80 border-4 border-red-500 bg-black rounded-4xl p-5 ">
                                        {canvasData.businessTitle}
                                </h1>
                                <div className="flex flex-col gap-5 absolute left-35 bottom-35 ">
                                    <MainButton name="View" onClick={viewingCanvas} />
                                    <MainButton name="Download" onClick={null}/>
                                </div>
                            </div>
                            <AiMessage output={completionMessage} first={true}/>
                        </>
                    )}
                    {viewing && (
                        <div className=" relative w-full h-full">
                            <BusinessCanvas canvasData={canvasData}/>
                            <button onClick={notViewingCanvas}>
                                <div className="flex absolute top-2 right-2 items-center gap-2 w-fit h-fit text-white text-lg cursor-pointer bg-black font-extralight rounded-4xl p-4">
                                    <IoIosCloseCircle className="bg-white rounded-4xl text-2xl text-red-500" /> Close Canvas
                                </div>
                            </button>
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