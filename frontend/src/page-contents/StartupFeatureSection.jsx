import { features } from "../constants/startupneeds"
const FeatureSection = () => {
  return (
    <section id="features" className="my-10">
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                Features
            </span>
            <h2 className="text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-20 tracking wide">
                Easy access to all the 
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                &nbsp;Startups
                </span>  and 
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                &nbsp;Fundraisers 
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                 {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-b text-xl">{feature.text}</h5>
                  <p className="text-md p-1 mb-20 text-neutral-500">{feature.description}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
    </div>
    </section>
  )
}

export default FeatureSection