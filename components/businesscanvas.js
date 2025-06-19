import React from 'react';

const BusinessCanvas = ({ canvasData }) => {
  if (!canvasData) return null;

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 text-black">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        {canvasData.businessTitle}
      </h2>
      
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
          <h3 className="font-bold text-red-700 mb-2">Who Do You Serve?</h3>
          <p className="text-sm text-gray-700">{canvasData.whoDoYouServe}</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <h3 className="font-bold text-orange-700 mb-2">What Is The Problem Your Customer Has?</h3>
          <p className="text-sm text-gray-700">{canvasData.customerProblem}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-blue-700 mb-2">How Is Your Customer Solving This?</h3>
          <p className="text-sm text-gray-700">{canvasData.currentSolutions}</p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mb-4'>
        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-green-700 mb-2">What Do You Offer Your Customers?</h3>
          <p className="text-sm text-gray-700">{canvasData.yourSolution}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
          <h3 className="font-bold text-purple-700 mb-2">What Is Your Story?</h3>
          <p className="text-sm text-gray-700">{canvasData.yourStory}</p>
        </div>

        <div className="bg-fuchsia-50 p-4 rounded-lg border-2 border-fuchsia-200">
          <h3 className="font-bold text-fuchsia-700 mb-2">How Do You Make Money?</h3>
          <p className="text-sm text-gray-700">{canvasData.revenueModel}</p>
        </div>
      </div>
      
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
          <h3 className="font-bold text-yellow-700 mb-2">Why Does Your Customer Want It?</h3>
          <p className="text-sm text-gray-700">{canvasData.customerDesire}</p>
        </div>
        
        <div className=" flex justify-center items-center gap-1.5 md:gap-2.5  bg-red-400 p-4 rounded-lg border-2 border-gray-200">
          <img src = "/foundervision-logo.png" alt="FounderVision" className='w-10 m:w-25'></img>
          <h1 className='text-white  mt-3 md:mt-2 font-inter font-extrabold text-s md:text-xl'>FounderVision</h1>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-200">
          <h3 className="font-bold text-teal-700 mb-2">How Does It Get To Your Customers?</h3>
          <p className="text-sm text-gray-700">{canvasData.distributionChannels}</p>
        </div>
      </div>
      
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
          <h3 className="font-bold text-pink-700 mb-2">What Gives You The Edge?</h3>
          <p className="text-sm text-gray-700">{canvasData.competitiveEdge}</p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg border-2 border-indigo-200">
          <h3 className="font-bold text-indigo-700 mb-2">What Is Needed To Get Started?</h3>
          <p className="text-sm text-gray-700">{canvasData.startupRequirements}</p>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-200">
          <h3 className="font-bold text-cyan-700 mb-2">What Are Ongoing Needs?</h3>
          <p className="text-sm text-gray-700">{canvasData.ongoingNeeds}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCanvas;