import React from "react";
import { useInView } from "react-intersection-observer";

const guide = () => {
    const { ref: title, inView: titleInView } = useInView({triggerOnce: true});
    const { ref: guide1, inView: guide1InView } = useInView({triggerOnce: true});
    const { ref: guide2, inView: guide2InView } = useInView({triggerOnce: true});
    const { ref: guide3, inView: guide3InView } = useInView({triggerOnce: true});
    return (
        <div className="flex flex-col font-inter justify-center items-center mt-20">
            <h1 className={`bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold transition-all duration-1000 ${titleInView ? "opacity-100" : "opacity-0"}`} ref={title}>Guide</h1>
            <div className="flex flex-row max-[1350px]:flex-col gap-10 justify-center items-center mt-15 w-fit">
                <div className={`flex flex-col gap-5 border-l-3 pl-3 border-red-500 transition-all duration-800 ${guide1InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`} ref={guide1}>
                    <h1 className="text-white text-4xl max-[730px]:text-2xl font-extrabold">Enter Your Startup Idea</h1>
                    <p className="text-gray-300 text-lg font-normal w-150 max-[730px]:w-100 max-[530px]:w-80">For the best results, describe your business idea clearly in 1-2 sentences. 
                    Include the product or service, target audience, and what makes it unique or valuable — the more specific and practical your idea, the more tailored and insightful the 
                    AI-generated canvas will be.
                    </p>
                </div>
                <img src="guide-image1.png" alt="Example Prompt" className={`self-center justify-self-center w-170 max-[730px]:w-125 max-[530px]:w-90 rounded-4xl transition-all duration-800  ${guide1InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}/>
            </div>
            <div className="flex flex-row max-[1350px]:flex-col-reverse gap-10 justify-center items-center mt-40 w-fit">
                <img src="guide-image2.png" alt="View Canvas Image" className={`self-center justify-self-center w-170 max-[730px]:w-125 max-[530px]:w-90 rounded-4xl transition-all duration-800  ${guide2InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}/>
                <div className={`flex flex-col gap-5 border-r-3 max-[1350px]:border-r-0 max-[1350px]:border-l-3 pr-3 max-[1350px]:pr-0 max-[1350px]:pl-3 border-red-500 transition-all duration-800  ${guide2InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}ref={guide2}>
                    <h1 className="text-white text-4xl font-extrabold max-[730px]:text-2xl">View Your Business Canvas</h1>
                    <p className="text-gray-300 text-lg font-normal w-150 max-[730px]:w-100 max-[530px]:w-80">Once FounderAI generates your canvas, your chat will be saved to the dashboard. You can view or download your business model by clicking the 'View/Download' button.
                    </p>
                </div>
            </div>
            <div className="flex flex-row max-[1350px]:flex-col gap-10 justify-center items-center mt-40 w-fit">
                <div className={`flex flex-col gap-5 border-l-3 pl-3 border-red-500 transition-all duration-800  ${guide3InView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}ref={guide3}>
                    <h1 className="text-white text-4xl font-extrabold max-[730px]:text-2xl max-[415px]:text-[22px]">Download Your Business Canvas</h1>
                    <p className="text-gray-300 text-lg font-normal w-150 max-[730px]:w-100 max-[530px]:w-80">After viewing your canvas, scroll to the bottom and click the download button 
                    to export your business model as a PDF.
                    </p>
                </div>
                <img src="guide-image3.png" alt="Download Button Image" className={`self-center justify-self-center w-170 max-[730px]:w-125 max-[530px]:w-90 rounded-4xl transition-all duration-800  ${guide3InView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}/>
            </div>            
        </div>    
)}

export default guide