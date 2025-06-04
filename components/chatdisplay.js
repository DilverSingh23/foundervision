import React, { useEffect, useState } from "react";
import UserMessage from "./usermessage";
import AiMessage from "./aimessage";
const chatdisplay = ({ userInput  }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (userInput.length > 0) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
            clearTimeout()
        }
    }, [userInput])
    const startMessage = "Hey, I'm FounderAI🚀! Input your business idea in as much detail as possible and I will help you generate it into reality!";
    const endMessage = "Got it! I'm generating a business canvas based on your idea🎨."

    return (
        <div className="flex flex-col w-200 h-full gap-10 self-center mt-10">
            <AiMessage output = {startMessage} />
            {userInput.length > 0 && (
                <>
                    <UserMessage message={userInput} />
                    {show && (
                         <AiMessage output={endMessage} className="opacity-0 transition-opacity duration-1000" />
                    )}
                </>
            )}
        </div>
    )
}


export default chatdisplay