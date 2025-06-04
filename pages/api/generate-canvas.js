import { generateBusinessCanvas } from "@/lib/gemini";

export default async function handler(req,res) {
    if (req.method !== "POST") {
        return res.status(405).json({error: 'Method not allowed' });
    }
    try {
        const businessIdea = req.body;

        if (!businessIdea || businessIdea.trim() == '') {
            return res.status(400).json({error: 'Business idea is required'});
        }

        const canvasData = await generateBusinessCanvas(businessIdea);
        res.status(200).json({success: true, data: canvasData});
    } catch(error) {
        console.error("API Error: ", error);
        res.status(500).json({error: "Failed to generate business canvas", details: error.message});
    }
}