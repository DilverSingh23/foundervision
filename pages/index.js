'use client'
import Navbar from "@/components/navbar";
import MainButton from "@/components/mainbutton";
import Footer from "@/components/footer";
import Guide from "@/components/guide";
import Founders from "@/components/founders";
import FAQ from "@/components/faq";
import {useState, useEffect, useRef} from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [firstTime, setFirstTime] = useState(false)

  const guide = useRef(null);
  const faq = useRef(null);
  const founders = useRef(null);
  const home = useRef(null);

  const handleOnClick = () => {
    router.push('/chatbotdashboard');
  }

  const handleGuideClick = () => {
    if(guide.current) {
      guide.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const handleFAQClick = () => {
    if(faq.current){
      faq.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const handleFoundersClick = () => {
    if(founders.current){
      founders.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const backToHome = () => {
    if (home) {
      home.current.scrollIntoView({behavior: "smooth"})
    }
  }

  useEffect(() =>{
    setIsLoaded(true)
  },[])

  useEffect(() => {
    if (firstTime) {
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname)
      }
      return
    }
    else {
      if (router.asPath.includes("#guide")) {
        setTimeout(() => {
          handleGuideClick();
          setFirstTime(true)
        }, 1)
      }
      else if (router.asPath.includes("#faq")) {
        setTimeout(() => {
          handleFAQClick();
          setFirstTime(true)
        }, 1)
      }
      else if (router.asPath.includes("#founders")) {
        setTimeout(() => {
          handleFoundersClick();
          setFirstTime(true)
        }, 1)
      }
    }
  }, [router.asPath, firstTime])

  return (
    <section className="flex w-full flex-center flex-col overflow-x-hidden" ref={home}>
      <Navbar guideOnClick={handleGuideClick} faqOnClick={handleFAQClick} backToHome={backToHome}/>
      <div className = {`transition-opacity duration-2000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col justify-center items-center gap-5 mt-45 w-full">
          <h2 className="flex justify-center bg-red-800 text-white text-center w-75 rounded-4xl p-2 text-s">Your Personal Startup Strategist</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-inter font-extrabold bg-gradient-to-r from-rose-500 to-red-700 bg-clip-text text-transparent">
            Your Startup Vision, Structured in Seconds
          </h1>
        </div>
        <br></br>
        <div className="flex justify-center align-center font-inter flex-col">
          <div className="flex justify-center align-center">
            <p className="text-gray-300 text-xs lg:text-sm mt-5">Backed by</p>
            <img src = "techincubator-logo.png" alt = "Tech Incubator" className="w-15 md:w-15 lg:w-18 "></img>
          </div>
          <div className="flex flex-col gap-y-20 justify-center items-center text-center mt-4">
            <p className="text-gray-300 font-light text-s s:text-s md:text-base lg:text-xl w-85 xs:w-95 sm:w-150 md:w-2xl lg:w-4xl">
            FounderVision analyzes your startup idea and instantly generates a structured business canvas, 
            powered by AI insights, to help you build faster and smarter.</p>
            <MainButton name="Launch Your Idea" onClick={handleOnClick} />
            <img src = "landingimage.png" alt="Landing Image" className="w-250 max-[1050px]:w-200 max-[840px]:w-150 max-[630px]:w-125 max-[530px]:w-100 max-[430px]:w-90 rounded-3xl" />
          </div>
          <div ref={guide}>
            <Guide />
          </div>
          <div ref={faq}>
            <FAQ />
          </div>
          <div ref={founders}>
            <Founders />
          </div>
        </div>
      </div>
      <Footer guideOnClick={handleGuideClick} faqOnClick={handleFAQClick} foundersOnClick={handleFoundersClick} backToHome={backToHome} />
    </section>
  )
}
