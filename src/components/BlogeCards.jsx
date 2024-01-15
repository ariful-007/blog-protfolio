
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";


const BlogeCards = ({blog}) => {

  const filterBlog = blog

  return (
    <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {
        filterBlog.map((item)=> <Link key={item.id} className=" p-5 shadow-lg rounded cursor-pointer" >
          <div>
            <img src={item.image} alt="" className=" w-full" />
          </div>
          <h3 className=" mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer">{item.title}</h3>
          <p className=" mb-2 text-gray-600"> <FaUser className=" inline-flex mr-2 items-center" /> {item.author}</p>
          <p className="  text-sm text-gray-600">Published : {item.published_date}</p>
        </Link> )
      }
    </div>
  );
};

export default BlogeCards;