import React, { useEffect, useState, useRef } from "react";
import UserMessage from "./usermessage";
import AiMessage from "./aimessage";
import Typing from "./typing";
import BusinessCanvas from "./businesscanvas";

const chatdisplay = ({ userInput }) => {
    const [show, setShow] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [canvasData, setCanvasData] = useState(null);
    const [error, setError] = useState("");
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

    const onDownloadPDF = () => {
        console.log("BANG BANG")
    }

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

                    {canvasData && (
                        <>
                            <BusinessCanvas canvasData={canvasData} />
                            <AiMessage output={completionMessage} first={true} />
                        </>
                    )}
                
                </>
            )}
            <div ref={bottomOfChat} />
        </div>
    )
}


export default chatdisplay