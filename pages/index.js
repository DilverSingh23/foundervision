export default function Home() {
  return (
    <section className="w-ful flex-center flex-col">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-inter font-extrabold bg-gradient-to-r from-rose-500 to-red-700 bg-clip-text text-transparent">
        Your Startup Vision, Structured in Seconds
      </h1>
      <br></br>
      <div className="flex justify-center align-center font-inter flex-col">
        <div className="flex justify-center align-center">
          <p className="text-gray-100 text-xs md:text-sm lg:text-xl mt-5">Backed by</p>
          <img src = "techincubator-logo.png" alt = "Tech Incubator" className="w-15 md:w-20 lg:w-25 "></img>
        </div>
        <div className="flex justify-center items-center text-center mt-4">
          <p className="text-gray-300 font-extralight text-s s:text-s md:text-xl lg:text-2xl w-150 md:w-2xl lg:w-5xl">FounderVision analyzes 
          your startup idea and instantly generates a structured business canvas, 
          powered by AI insights, to help you build faster and smarter.</p>
        </div>
      </div>
    </section>
  );
}
