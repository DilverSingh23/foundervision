import React, { useEffect, useState } from "react";
import FounderCard from "./foundercard";
import { useInView } from "react-intersection-observer";

const founders = () => {
    const { ref: title, inView: titleInView } = useInView({triggerOnce: true});
    const { ref: paragraph, inView: paragraphInView } = useInView({triggerOnce: true});

    return (
        <div className="flex flex-col text-white font-inter justify-center items-center mt-30 gap-y-15">
            <h1 className={`bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold transition-opacity duration-1000 ${titleInView ? "opacity-100" : "opacity-0"}`} ref={title}>Founders</h1>
            <div className="flex justify-center items-center gap-35 w-screen">
                <FounderCard name={"Dilver Singh"} imgSrc={"founder-1.jpeg"} direction={"-translate-x-full"}/>
                <FounderCard name={"Piyas Baidya"} imgSrc={"founder-2.jpeg"} direction={"translate-x-full"}/>
            </div>
            <div className={`flex flex-col gap-10 transition-opacity duration-1000 ${paragraphInView ? "opacity-100" : "opacity-0"}`} ref={paragraph}>
                <p className="w-220 text-center font-extralight text-gray-300">We designed this AI-powered tool to help startups craft clear, actionable plans without the typical frustrations of early-stage business planning. Instead of running into a roadblock of uncertainty, founders can leverage our platform to kickstart their strategy with confidence and clarity.</p>
                <p className="w-220 text-center font-extralight text-gray-300">Our mission is to shape the future of entrepreneurship, one canvas at a time, leaving a lasting impact on the world.</p>
            </div>
        </div>
    )
}

export default founders