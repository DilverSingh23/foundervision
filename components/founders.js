import React from "react";
import FounderCard from "./foundercard";

const founders = () => {

    return (
        <div className="flex flex-col text-white font-inter justify-center items-center mt-20 gap-y-15">
            <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold">Founders</h1>
            <div className="flex justify-center items-center gap-35">
                <FounderCard name={"Dilver Singh"} imgSrc={"founder-1.jpeg"}/>
                <FounderCard name={"Piyas Baidya"} imgSrc={"founder-2.jpeg"}/>
            </div>
            <p className="w-200 text-center font-extralight">FounderVision was created by Dilver Singh and Piyas Baidya, two Macaulay Honors students at Queens College. 
                We designed this AI-powered tool to help startups craft clear, actionable plans without the typical frustrations of early-stage business planning. 
                Instead of running into a roadblock of uncertainty, founders can leverage our platform to kickstart their strategy with confidence and clarity. 
                Our mission is to shape the future of entrepreneurship, one canvas at a time, leaving an everlasting impact on the world. 
            </p>
        </div>
    )
}

export default founders