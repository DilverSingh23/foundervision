import React from "react";
import Question from "./question";
import { useInView } from "react-intersection-observer";

const faq = () => {
    const { ref: title, inView: titleInView} = useInView({triggerOnce: true});
    const { ref: questions, inView: questionsInView} = useInView({triggerOnce: true});
    const question1 = "What is the Business Model Canvas? How can I use the chatbot?"
    const answer1 = 
    `The Business Model Canvas is an AI powered tool that helps startups plan and visualize their business by outlining 11 essential components. 
    The best part? You don't need any prior experience or business background to use it. Our platform is designed for both first-time founders and experienced entrepreneurs. 
    The best way to utilize our platform is to create a detailed and coherent prompt that lists your business plan entirely, the more context you give, the more tailored and impactful your 
    AI-generated Business Model Canvas will be. If you aren't able to provide enough detail, the canvas will fill out details that are relevant to your startup to assist you further.`

    const question2 = "How should I phrase my business idea to get the best results?"
    const answer2 =
    `Our chatbot performs the best when your prompt is specific and detail oriented. Include key aspects of your startup such as industry, target location, available budget, 
    service type like in house service or to go shops, and customer type like business to business or business to consumer. An example can be: “I want to open a thrift store 
    targeting Gen Z consumers in Detroit. I have a $20,000 budget, plan to source inventory locally, and will promote the business through social media and pop-up shops. 
    Can you help me identify potential key partners and provide a breakdown of what my business model can look like?”`

    const question3 = "Can I save or export my canvas? Can I save my chats on the platform?" 
    const answer3 = 
    `Yes! You can download your completed canvas as a PDF, making it easy to share your personalized model with others. While you are able to revisit your generated canvas, 
    you are only limited to 1 conversation per chat, and a total of 5 chats that will be saved to your dashboard. You can start a new conversation to modify or expand your initial canvas.`

    const question4 = "How accurate or trustworthy is the AI's information? "
    const answer4 = `Our platform will output information based on best business practices and real startup data. However, it's important that users review and adjust their 
    results to match specific business needs. Your information will always remain confidential and because conversations are not saved permanently you will be able to avoid any concerns 
    of your startup ideas being shared publicly. Privacy and data security is extremely important to us, which is why we can guarantee your safety while using our platform.`

    return (
        <div className="flex flex-col font-inter justify-center items-center mt-30 gap-y-15">
            <h1 className={`bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold transition-opacity duration-1000 ${titleInView ? "opacity-100" : "opacity-0"}`} ref={title}>FAQ</h1>
            <div className={`flex flex-col h-fit w-250 bg-black rounded-4xl transition-all duration-800 pb-[40px] ${questionsInView ? "translate-y-0 opacity-100" : "translate-y-75 opacity-0"}`} ref={questions}> 
                <Question question={question1} answer={answer1} />
                <Question question={question2} answer={answer2} />
                <Question question={question3} answer={answer3} />
                <Question question={question4} answer={answer4} />
            </div>
        </div>
    )
}

export default faq