import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const geminiModel = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash'
});

export const generateBusinessCanvas = async (businessIdea) => {
    const prompt = 
    `Analyze the following business idea and generate a comprehensive business model canvas. 
    Please provide detailed information for each of the 11 key components in JSON format.
    
    Business Idea: "${businessIdea}"
    
    Please respond with ONLY a JSON object containing exactly these fields:
    {
        "businessTitle": "A short title that describes their business idea that can serve as the title of the canvas.",
        "whoDoYouServe": "Clearly define your target customer or user group. Who are they, and what defines them?",
        "customerProblem": "Describe the main problem or pain point your customer experiences. Be specific and customer-centric.",
        "currentSolutions": "Explain how customers are currently addressing this problem, but highlight the flaws or inefficiencies in those solutions.",
        "yourSolution": "Detail your offering and how it solves the customer's problem better than current alternatives.",
        "yourStory": "Tell the origin or mission story behind this business idea. What inspired it?",
        "revenueModel": "Explain how your business generates revenue. What are the primary ways money flows into the business?",
        "customerDesire": "Explain the emotional or practical reasons why customers want your solution. What makes it appealing or urgent?",
        "distributionChannels": "Describe how your product or service gets to your customers. Online, physical, partnerships, etc.",
        "competitiveEdge": "What makes you different or better than existing competitors? Mention any IP, insights, partnerships, or positioning.",
        "startupRequirements": "List the essential items, resources, or steps needed to launch the business.",
        "ongoingNeeds": "List the key operational needs or recurring costs required to keep the business running effectively."
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
