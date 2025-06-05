import React from "react";

const typing = () => {
    return(
        <div className="w-[4.5em] h-[2em] relative p-[12px] ml-[5px] bg-[#E6E6E6] rounded-[20px]">
            <div className="float-left w-[8px] h-[8px] ml-[4px] mr-[4px] bg-[#8d8c91] rounded-[50%] opacity-0 animate-typing .dot-1"></div>
            <div className="float-left w-[8px] h-[8px] ml-[4px] mr-[4px] bg-[#8d8c91] rounded-[50%] opacity-0 animate-typing .dot-2"></div>
            <div className="float-left w-[8px] h-[8px] ml-[4px] mr-[4px] bg-[#8d8c91] rounded-[50%] opacity-0 animate-typing .dot-3"></div>
        </div>
    )
}

export default typing