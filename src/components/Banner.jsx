import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
  return (
    <div  className="py-32 px-4 mx-auto bg-black">
      <div  className="text-white text-center">
        <h1 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary" > Welcome to Our Bloge</h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">A blog is an online journal or informational website run by an individual, group, or corporation that offers regularly updated content  about a topic.corporation that offers regularly updated content  about a topi.</p>
        <div>
          <Link className=" font-medium hover:text-orange-500 inline-flex items-center" to="/">Learn more <FaArrowRight className=" mt-1 ml-1" /></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;