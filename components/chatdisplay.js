import React, { useEffect, useState, useRef } from "react";
import UserMessage from "./usermessage";
import AiMessage from "./aimessage";
const chatdisplay = ({ userInput  }) => {
    const [show, setShow] = useState(false);
    const [mostRecentMessage, setMostRecentMessage] = useState("")
    const startMessage = "Hey, I'm FounderAI🚀! Input your business idea in as much detail as possible and I will help you generate it into reality!";
    const endMessage = "Got it! I'm generating a business canvas based on your idea🎨."
    const bottomOfChat = useRef(null)

    useEffect(() => {
        if (userInput.length > 0) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
            clearTimeout()
        }
    }, [userInput])

    useEffect(() => {
        if (bottomOfChat.current) {
            bottomOfChat.current.scrollIntoView({behavior: "smooth"})
        }
    }, [show])

    return (
        <div className="flex flex-col w-200 h-11/12 gap-10 self-center overflow-auto mt-5 scroll-behavior-smooth">
            <AiMessage output = {startMessage} />
            {userInput.length > 0 && (
                <>
                    <UserMessage message={userInput} />
                    {show && (
                        <AiMessage id="final" output={endMessage} className="opacity-0 transition-opacity duration-1000" />
                    )}
                </>
            )}
            <div ref={bottomOfChat} />
        </div>
    )
}


export default chatdisplay