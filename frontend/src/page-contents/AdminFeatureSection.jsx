import { features } from "../constants/adminneeds"
const FeatureSection = () => {
  return (
    <section id="features" className="my-10">
    <div className="relative mt-20 border-b border-neutral-800 min-h-[300px]">
        <div className="text-center">
            <h2 className="text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-20 tracking wide">
                This Page is only accessible to the
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                &nbsp; Admins
                </span> 
            </h2>
        </div>

    </div>
    </section>
  )
}

export default FeatureSection