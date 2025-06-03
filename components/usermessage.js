import React from "react";
import { FaUserCircle } from "react-icons/fa";

const usermessage = ({ message }) => {
    return(
        <div className="flex items-center self-end gap-5">
            <FaUserCircle className="text-red-500 w-13 h-13" />
            <div className="w-fit self-end text-base font-inter text-white bg-red-500 p-4 rounded-4xl">
                {message}
            </div>
         </div>
    )
}

export default usermessage