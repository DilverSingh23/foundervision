import React, { useEffect, useRef, useState } from "react";

const navbutton = ({name, onClick}) => {
    return (
        <button className="relative text-white font-inter text-xs md:text-sm cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-[100%]" onClick={onClick}>{name}</button>
    )
}

export default navbutton