'use client'
import React, { useEffect, useState } from 'react'
import NavButton from "./navbutton"
import { useRouter } from 'next/router'
const navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const router = useRouter()
    const backToHome = () => {
        router.push('/')
    }
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`flex justify-self-center self-center justify-center w-fit p-3 pl-5 pr-5 h-fit mt-5 fixed top-0 rounded-4xl ${scrollY > 100 ? "bg-red-500/20" : "bg-none"} gap-10 md:gap-100 lg:gap-160`} onClick={backToHome}>
            <div className="flex justify-center align-middle gap-1.5 md:gap-2.5 cursor-pointer">
                <img src = "/foundervision-logo.png" alt="FounderVision" className='w-10 m:w-25'></img>
                <h1 className='text-white mt-3 md:mt-2 font-inter font-extrabold text-s md:text-xl'>FounderVision</h1>
            </div>
            <div className="flex justify-center align-middle gap-3 md:gap-7 text-xs mt-2 md:mt-1">
                <NavButton name="Guide" />
                <NavButton name="FAQ" />
                <NavButton name="Founders" />
            </div>
        </div>
    )
}

export default navbar