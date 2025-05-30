export default function Home() {
  return (
    <section className="w-ful flex-center flex-col">
      <h1 className="text-5xl text-center font-inter font-extrabold bg-gradient-to-r from-rose-500 to-red-700 bg-clip-text text-transparent">
        Your Startup Vision, Structured in Seconds
      </h1>
      <br></br>
      <div className="flex justify-center align-cente font-inter font-medium">
        <p className="text-white text-sm mt-5">Backed by</p>
        <img src = "techincubator-logo.png" alt = "Tech Incubator" className="w-20"></img>
      </div>
    </section>
  );
}
