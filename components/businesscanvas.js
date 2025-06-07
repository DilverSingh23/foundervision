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
          <h3 className="font-bold text-red-700 mb-2">Key Partners</h3>
          <p className="text-sm text-gray-700">{canvasData.keyPartners}</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
          <h3 className="font-bold text-orange-700 mb-2">Key Activities</h3>
          <p className="text-sm text-gray-700">{canvasData.keyActivities}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-blue-700 mb-2">Value Propositions</h3>
          <p className="text-sm text-gray-700">{canvasData.valuePropositions}</p>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-green-700 mb-2">Customer Relationships</h3>
          <p className="text-sm text-gray-700">{canvasData.customerRelationships}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
          <h3 className="font-bold text-purple-700 mb-2">Customer Segments</h3>
          <p className="text-sm text-gray-700">{canvasData.customerSegments}</p>
        </div>
      </div>
      
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
          <h3 className="font-bold text-yellow-700 mb-2">Key Resources</h3>
          <p className="text-sm text-gray-700">{canvasData.keyResources}</p>
        </div>
        
        <div className=" flex justify-center items-center gap-1.5 md:gap-2.5  bg-red-400 p-4 rounded-lg border-2 border-gray-200">
          <img src = "/foundervision-logo.png" alt="FounderVision" className='w-10 m:w-25'></img>
          <h1 className='text-white  mt-3 md:mt-2 font-inter font-extrabold text-s md:text-xl'>FounderVision</h1>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-200">
          <h3 className="font-bold text-teal-700 mb-2">Channels</h3>
          <p className="text-sm text-gray-700">{canvasData.channels}</p>
        </div>
      </div>
      
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
          <h3 className="font-bold text-pink-700 mb-2">Cost Structure</h3>
          <p className="text-sm text-gray-700">{canvasData.costStructure}</p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg border-2 border-indigo-200">
          <h3 className="font-bold text-indigo-700 mb-2">Revenue Streams</h3>
          <p className="text-sm text-gray-700">{canvasData.revenueStreams}</p>
        </div>
      </div>
      
      
      {/* <div className="flex justify-center mt-6">
        <button 
          onClick={onDownloadPDF}
          className="bg-gradient-to-r from-rose-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Download PDF Canvas
        </button>
      </div> */}
    </div>
  );
};

export default BusinessCanvas;