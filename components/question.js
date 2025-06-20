'use client'
import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const question = ({ question, answer }) => {
    const paragraphRef = useRef(null);
    const [questionClicked, setQuestionClicked] = useState(false);
    const [height, setHeight] = useState(0);
    const handleQuestionClick = () => {
        setQuestionClicked((prev) => !prev)
    }
    useEffect(() => {
        const el = paragraphRef.current
        if (el) {
            setHeight(el.getBoundingClientRect().height)
        }
    }, [questionClicked])
    return (
        <div className={`flex flex-col justify-baseline items-center w-full h-25 p-10 cursor-pointer border-white overflow-hidden ${questionClicked ? "questionTransition duration-300" : "closeQuestionTransition duration-500"}`} style= {{height: questionClicked ? `${height + 75}px` : 0}} onClick={handleQuestionClick}>
            <div className={`flex justify-baseline w-full border-white ${questionClicked ? "border-b-1" : "border-0"}`}>
                <h1 className="text-white font-extrabold text-xl max-[840px]:text-sm max-[630px]:text-xs">{question}</h1>
                <IoIosArrowDown className="text-white text-2xl ml-auto max-[840px]:text-sm" />
            </div>
            {questionClicked && (
                <p className={`text-gray-300 pt-5 w-fit z-1 max-[840px]:text-sm max-[630px]:text-xs`} ref={paragraphRef}>{answer}</p>
            )}
        </div>
    )
}

export default question