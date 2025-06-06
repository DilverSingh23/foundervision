import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const geminiModel = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash'
});

export const generateBusinessCanvas = async (businessIdea) => {
    const prompt = 
    `Analyze the following business idea and generate a comprehensive business model canvas. 
    Please provide detailed information for each of the 9 key components in JSON format.
    
    Business Idea: "${businessIdea}"
    
    Please respond with ONLY a JSON object containing exactly these fields:
    {
      "businessTitle": "A short title that describes their business idea that can serve as the title of the canvas",
      "keyPartners": "Detailed description of key partners, suppliers, and strategic alliances needed",
      "keyActivities": "Main activities and processes required to deliver the value proposition",
      "keyResources": "Critical assets, resources, and capabilities needed",
      "valuePropositions": "Unique value and benefits offered to customers",
      "customerRelationships": "Types of relationships established with customer segments",
      "channels": "How the company reaches and delivers value to customers",
      "customerSegments": "Target customer groups and market segments",
      "costStructure": "Major costs and expenses involved in the business model",
      "revenueStreams": "Ways the business generates revenue from customer segments"
    }
    
    Make each field comprehensive (2-4 sentences) and specific to the business idea provided.
    Ensure the response is valid JSON format, do not include any explanation, markdown, or text before or after it.
   `;

   try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
    }
    else {
        throw new Error("No valid JSON found in response.")
    }
   }
   catch (error) {
    console.log('Error generating business canvas: ', error)
    throw error;
   }
}
