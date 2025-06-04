import React from "react";

const aimessage = ({ output }) => {
    return (
        <div className="flex items-center">
            <img src="founderai.png" className="w-25 h-25 self-center"/>
            <div className="w-fit self-center text-base font-inter text-black bg-gray-300 p-4 rounded-4xl">
                {output}
            </div>
        </div>
    )
}

export default aimessage