import React from "react";
import { useInView } from "react-intersection-observer";

const founderCard = ({ name, imgSrc, direction }) => {
    const { ref: card, inView: cardInView } = useInView({triggerOnce: true});
    return (
        <div className={`flex flex-col items-center w-75 h-100 border-2 border-red-500 bg-gradient-to-b from-rose-500 to-red-600 rounded-4xl gap-5 opacity-0 transition-all duration-2500 ${cardInView ? "translate-x-0 opacity-100" : direction}`} ref={card}>
            <img src={imgSrc} alt = "Founder Image" className="w-45 h-45 rounded-[10rem] mt-5 border-2 border-white" />
            <h1 className="font-extrabold text-3xl">{name}</h1>
            <p className="font-extralight w-50 text-center">Student at Macaulay Honors College @ Queens College</p>
        </div>        
    )
}

export default founderCard