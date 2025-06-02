import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ChatbotDashboard() {
    return (
        <section className="justify-center w-full h-fit">
            <Navbar />
            <div className="mt-25 flex items-center w-full border-amber-300 border-4">
                <div className="flex-col ml-8 h-125 w-50 md:w-80 lg:w-125 bg-gradient-to-r from-rose-500 to-red-700 rounded-3xl p-7">
                    <div className="flex gap-3 items-center w-65 lg:w-110 h-fit">
                        <h1 className="text-white font-inter font-extrabold text-center text-3xl">Chats</h1>
                        <h2 className="text-white bg-white/30 rounded-3xl mt-0.5 w-10 p-1.5 font-inter font-light text-center text-xl">1</h2>
                    </div>
                    <div className="flex">

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}