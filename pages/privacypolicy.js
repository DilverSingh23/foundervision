import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function PrivacyPolicy() {
    const router = useRouter();
    const backToHome = () => {
        router.push("/")
    }

    const guideOnClick = () => {
        router.push("/#guide")
    }

    const faqOnClick = () => {
        router.push("/#faq")
    }

    const foundersOnClick = () => {
        router.push("/#founders")
    }
    return (
        <section className="flex flex-col justify-center w-full overflow-y-scroll">
            <Navbar guideOnClick={guideOnClick} faqOnClick={faqOnClick} backToHome={backToHome} />
            <div className="flex flex-col font-inter self-center items-center w-255 max-[1100px]:w-200 max-[850px]:w-130 max-[630px]:w-100 max-[450px]:w-85 mt-38 h-screen gap-10 flex-1">
                <h1 className="text-white text-5xl flex self-start ">Privacy Policy</h1>
                <div className="flex flex-col self-start text-white gap-15">
                    <h1 className="text-gray-300 text-[16px] font-light">Effective Date: 06/20/2025</h1>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">1. Introduction</h1>
                        <p className="text-gray-300 text-[15px]">
                            FounderVision ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information 
                            when you use our AI-powered business canvas generator service.
                        </p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">2. Personal Information We Collect</h1>
                        <h1 className="text-[18px]">2.2 Information You Provide</h1>
                        <p className="text-gray-300 text-[15px]">
                            FounderVision ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information 
                            when you use our AI-powered business canvas generator service.
                        </p>
                        <h1 className="text-[18px]">2.3 Information We Collect</h1>
                        <li className="text-gray-300 text-[15px] list-inside indent-[-21px] pl-[21px] ml-2">
                            <span className="font-bold">Startup Ideas and Chat Data:</span> When you use FounderVision, you provide startup ideas and engage in conversations with our AI chatbot. This information is used solely to generate your business canvas.
                        </li>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">3. How We Use Your Information</h1>
                        <p className="text-gray-300 text-[15px]">
                            Your startup ideas and chat conversations are used exclusively to:
                        </p>
                        <ul className="text-white flex flex-col gap-7 list-disc ml-2">
                            <li className="text-gray-300 text-[15px] list-inside">
                                Generate business canvas components through our AI system
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside">
                                Provide you with relevant business insights and recommendations
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside">
                                Improve the functionality of our service
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">4. Data Storage and Security</h1>
                        <ul className="text-white flex flex-col gap-7 list-disc ml-2">
                            <li className="text-gray-300 text-[15px] list-inside indent-[-21px] pl-[21px]">
                                <span className="font-bold">Local Storage:</span> Your chat conversations are stored locally in your browser's local storage
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside indent-[-21px] pl-[21px]">
                                <span className="font-bold">No Server Storage:</span> We do not store your conversations or startup ideas on our servers
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside indent-[-21px] pl-[21px]">
                                <span className="font-bold">Third-Party AI Processing:</span> Your inputs are processed by Google's Gemini API to generate business canvas content, but this data is not retained by us or Google beyond the processing session
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">5. Data Sharing</h1>
                        <p className="text-gray-300 text-[15px]">
                            We do not sell, rent, or share your information with third parties, except:
                        </p>
                        <ul className="text-white flex flex-col gap-7 list-disc ml-2">
                            <li className="text-gray-300 text-[15px] list-inside">
                                Processing through Google's Gemini API for AI-generated responses (subject to Google's privacy policies)
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">6. Your Control Over Your Data</h1>
                        <p className="text-gray-300 text-[15px]">
                            Since your data is stored locally in your browser:
                        </p>
                        <ul className="text-white flex flex-col gap-7 list-disc ml-2">
                            <li className="text-gray-300 text-[15px] list-inside">
                                You can clear your chat history at any time by clearing your browser's local storage
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside">
                                You control when and how your data is deleted
                            </li>
                            <li className="text-gray-300 text-[15px] list-inside">
                                No account deletion is necessary as we don't maintain user accounts
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">7. Third-Party Services</h1>
                        <p className="text-gray-300 text-[15px]">
                            We use Google's Gemini API to power our AI responses. Your interactions with our service may be subject to Google's privacy policies. 
                            We recommend reviewing Google's privacy policy for information about how they handle data.
                        </p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">8. Changes To This Privacy Policy</h1>
                        <p className="text-gray-300 text-[15px]">
                           We may update this Privacy Policy from time to time. The date at the top of this Privacy Policy indicates when it was last updated. 
                           We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your personal information.
                        </p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h1 className="text-2xl">9. Contact Us</h1>
                        <p className="text-gray-300 text-[15px]">
                           FounderVision welcomes your comments and questions regarding this Privacy Policy and the collection and use of your information. 
                           If you have questions or concerns, please email us at: <a href="mailto:dsinghh23@gmail.com"><span className="text-sky-500 text-underline">dsinghh23@gmail.com</span></a> or <a href="mailto:baidyapiyas@gmail.com"><span className="text-sky-500 text-underline">baidyapiyas@gmail.com</span></a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer guideOnClick={guideOnClick} faqOnClick={faqOnClick} foundersOnClick={foundersOnClick} backToHome={backToHome} />
        </section>
    )
}