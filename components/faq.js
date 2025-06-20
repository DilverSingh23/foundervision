import React from "react";
import Question from "./question";

const faq = () => {
    const question1 = "What is the Business Model Canvas? How can I use the chatbot?"
    const answer1 = 
    `The Business Model Canvas is an AI powered tool that outlines 11 essential components to assist a startup with planning. 
    The best part about this platform is that you don't need any experience or background to use it. 
    Our tool is designed for first-time founders and experienced startups as well. The best way to utilize our platform is to 
    create a detailed and coherent prompt that lists your business plan entirely because at the end of day the best way our AI 
    tool can help you is if we know the key details of what you're planning and based on that we will create a step by step with simple explanations and suggestions.
    The more detailed you are the more helpful the platform can be, if you don't give it enough detail then it will fill out the components on its own.`

    const question2 = "Can I save or export my canvas? Can I save my chats on the platform?" 
    const answer2 = `Yes, our platform allows you to download the canvas as a PDF which allows you to share your specifically generated model to others. 
    In terms of progress, you will be able to input your details and get a model but after that if you want to add to your description you can start a new conversation.
    Remember that only up to 5 conversations will be saved. `

    const question3 = "How accurate or trustworthy is the AI's information? "
    const answer3 = `Our platform will output information based on best business practices and real startup data, but users should review the information 
    and fix anything that the business canvas got wrong due to a limit of details in the prompt. It is incredibly trustworthy as your information will stay confidential to you 
    and since the conversations will not be saved after each session, you can trust that your information will not be saved and shared.`

    return (
        <div className="flex flex-col font-inter justify-center items-center mt-50 gap-y-15">
            <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-rose-500 to-red-600 text-4xl font-extrabold">FAQ</h1>
            <div className="flex flex-col h-fit w-250">
                <Question question={question1} answer={answer1} />
                <Question question={question2} answer={answer2} />
                <Question question={question3} answer={answer3} />
            </div>
        </div>
    )
}

export default faq