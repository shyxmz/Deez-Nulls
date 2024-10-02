import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text "> StartHub: </span>
             Simplifying Compliance and Growth for Startups
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> 
        Your all-in-one solution for KYC verification, progress tracking, and grant management
        </p>
        <div className="flex justify-center my-10">
            <a 
              href="/signup" 
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-900 transition-transform duration-300 hover:scale-105"
            >
                Register Now
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              className="rounded-lg w-1/2 border-4 border-transparent hover:border-orange-500 shadow-orange-400 mx-2 my-4 transform transition-transform duration-300 hover:-translate-y-2"
            >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tags!!
            </video>
            <video 
              autoPlay 
              loop 
              muted 
              className="rounded-lg w-1/2 border-4 border-transparent hover:border-orange-500 shadow-orange-400 mx-2 my-4 transform transition-transform duration-300 hover:-translate-y-2"
            >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tags!!
            </video>
        </div>
    </div>
  )
}

export default HeroSection
