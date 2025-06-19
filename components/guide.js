import React from "react";

const guide = () => {
    return (
        <div className="flex flex-col font-inter justify-center items-center mt-20">
            <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold">Guide</h1>
            <div className="flex flex-row gap-10 justify-center items-center mt-15 w-fit">
                <div className="flex flex-col gap-5 border-l-3 pl-3 border-red-500">
                    <h1 className="text-white text-4xl font-extrabold">Enter Your Startup Idea</h1>
                    <p className="text-gray-300 text-lg font-normal w-150">For the best results, describe your business idea clearly in 1-2 sentences. 
                    Include the product or service, target audience, and what makes it unique or valuable — the more specific and practical your idea, the more tailored and insightful the 
                    AI-generated canvas will be.
                    </p>
                </div>
                <img src="guide-image1.png" alt="Example Prompt" className="self-center justify-self-center w-170 rounded-4xl"/>
            </div>
            <div className="flex flex-row gap-10 justify-center items-center mt-40 w-fit">
                <img src="guide-image2.png" alt="View Canvas Image" className="self-center justify-self-center w-170 rounded-4xl"/>
                <div className="flex flex-col gap-5 border-r-3 pr-3 border-red-500">
                    <h1 className="text-white text-4xl font-extrabold">View Your Business Canvas</h1>
                    <p className="text-gray-300 text-lg font-normal w-150">Once FounderAi generates your canvas, your chat will be saved to the dashboard. You can view or download your business model by clicking the 'View/Download' button.
                    </p>
                </div>
            </div>
            <div className="flex flex-row gap-10 justify-center items-center mt-40 w-fit">
                <div className="flex flex-col gap-5 border-l-3 pl-3 border-red-500">
                    <h1 className="text-white text-4xl font-extrabold">Download Your Business Canvas</h1>
                    <p className="text-gray-300 text-lg font-normal w-150">After viewing your canvas, scroll to the bottom and click the download button 
                    to export your business model as a PDF.
                    </p>
                </div>
                <img src="guide-image3.png" alt="Download Button Image" className="self-center justify-self-center w-170 rounded-4xl"/>
            </div>            
        </div>    
)}

export default guide