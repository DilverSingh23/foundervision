import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaHome, FaPlus } from "react-icons/fa";

export default function ChatbotDashboard() {
    const backToHome = () => {
        const router = useRouter();
        router.push("/");
    }
    return (
        <section className="justify-center w-full h-fit">
            <Navbar />
            <div className="mt-25 flex items-center w-full border-amber-300 border-4">
                <div className="flex-col w-75 ml-8 h-200 bg-gradient-to-r from-rose-500 to-red-700 rounded-3xl p-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-inter font-extrabold text-center text-3xl">Chats</h1>
                        <h2 className="text-white bg-white/30 rounded-3xl mt-0.5 w-10 p-1.5 font-inter font-light text-center text-xl">1</h2>
                    </div>
                    <div className="flex mt-5 justify-between items-center">
                        <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50">
                            <FaHome className="text-xl"/>
                            <h2 className="text-base" onClick={backToHome}>Home</h2>
                        </div>
                        <div className="flex gap-2 text-white bg-white/30 rounded-3xl p-3 font-inter font-medium text-center cursor-pointer hover:bg-white/50">
                            <FaPlus className="text-xl"/>
                            <h2 className="text-base">Add</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}