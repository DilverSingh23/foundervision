import React from 'react'
import NavButton from "./navbutton"
import {useRouter} from 'next/router'
const navbar = () => {
    const router = useRouter()
    const backToHome = () => {
        router.push('/')
    }
    return (
        <div className="flex justify-center align-middle w-full h-fit mt-5 gap-10 md:gap-100 lg:gap-160" onClick={backToHome}>
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