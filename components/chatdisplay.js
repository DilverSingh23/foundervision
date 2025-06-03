import React from "react";
import UserMessage from "./usermessage";

const chatdisplay = ({ userInput  }) => {
    return (
        <div className="flex flex-col w-200 h-full gap-10 self-center mt-10">
            <div className="flex items-center">
                <img src="founderai.png" className="w-25 h-25"/>
                <div className="w-fit self-start text-base font-inter text-black bg-gray-300 p-4 rounded-4xl">
                    Hey, I'm FounderAI🚀! Input your business idea in as much detail as possible and I will help you
                    generate it into reality!
                </div>
            </div>
            {userInput.length > 0 && (
                <UserMessage message={userInput} />
            )}
        </div>
    )
}


export default chatdisplay