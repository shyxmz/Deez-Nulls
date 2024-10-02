const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text "> Admin Page</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> 
        Validate startups and send Messages/Info to the EIRs and Startups
        </p>
        <div className="flex justify-center my-10">
            <a 
              href="/Shortlisted" 
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-900 transition-transform duration-300 hover:scale-105"
            >
                Validate Startups
            </a>
        </div>
    </div>
  )
}
export default HeroSection
