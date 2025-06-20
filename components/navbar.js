'use client'
import React, { useEffect, useState } from 'react'
import NavButton from "./navbutton"
const navbar = ({ guideOnClick, faqOnClick, foundersOnClick, backToHome }) => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`flex justify-self-center self-center justify-center w-fit p-3 pl-5 pr-5 h-fit mt-5 z-100 fixed top-0 rounded-4xl ${scrollY > 100 ? "bg-red-500/20" : "bg-none"} gap-10 md:gap-100 lg:gap-160`}>
            <div className="flex justify-center align-middle gap-1.5 md:gap-2.5 cursor-pointer" onClick={backToHome}>
                <img src = "/foundervision-logo.png" alt="FounderVision" className='w-10 m:w-25'></img>
                <h1 className='text-white mt-3 md:mt-2 font-inter font-extrabold text-s md:text-xl'>FounderVision</h1>
            </div>
            <div className="flex justify-center align-middle gap-3 md:gap-7 text-xs mt-2 md:mt-1">
                <NavButton name="Guide" onClick={guideOnClick} />
                <NavButton name="FAQ" onClick={faqOnClick}/>
                <NavButton name="Founders" onClick={foundersOnClick} />
            </div>
        </div>
    )
}

export default navbar