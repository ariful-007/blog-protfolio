import { FaTwitter,FaInstagram ,FaFacebookF  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer  className="bg-gray-900">
      <div className=" pt-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">
          <div className=" grid mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className=" font-medium tracking-wide text-gray-300">Category</p>
                <ul className=' mt-2 space-y-2'>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">New</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">World</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Games</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">References</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className=" font-medium tracking-wide text-gray-300">Apples</p>
                <ul className=' mt-2 space-y-2'>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Web</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">E-commeres</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Business</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Entertainment</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Protfiolo</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className=" font-medium tracking-wide text-gray-300">Cherry</p>
                <ul className=' mt-2 space-y-2'>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Media</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Brohure</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Nonprofit</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Education</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Projects</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className=" font-medium tracking-wide text-gray-300">Busines</p>
                <ul className=' mt-2 space-y-2'>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Infopreneur</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Personal</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Wiki</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Fourm</a>
                  </li>
                  <li>
                    <a className=" text-gray-500 transition-colors duration-300 hover:text-orange-500" href="/">Projects</a>
                  </li>
                </ul>
              </div>

            </div>
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                <p className=" font-medium tracking-wide text-gray-300">Subscribe for Updates</p>
                <form className="mt-4 flex flex-col md:flex-row">
                  <input type="email" name="email" id="email" className=" flex-wrap w-full h-12 px-4 mb-2 transition duration-300 bg-white border  border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none " />

                  <button type='submit' className=" inline-flex items-center justify-center h-12 font-medium text-white px-6 tracking-wide transition duration-300 rounded border shadow-md hover:bg-orange-500  focus:outline-none">
                  Subscribe
                </button>
                </form>
                <p className=' text-gray-300 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam modi doloribus magnam, obcaecati, placeat ipsum quis sequi repudiandae et, corporis quisquam optio amet tempora!</p>
            </div>
          </div>

          <div className=" flex flex-col justify-between pt-5 pb-10 border-t border-gray-500 sm:flex-row">
            <p className="text-sm text-gray-500">© Copyright 2024 | All right resereved. </p>
            <div className=" flex items-center mt-4 space-x-4 sm:mt-0">
              <a className=" text-gray-500 transition-all duration-300 hover:text-orange-500" href="/home"> <FaTwitter className=" w-6 h-6" /></a>
              <a className=" text-gray-500 transition-all duration-300 hover:text-orange-500" href="/home"> <FaInstagram className=" w-6 h-6" /></a>
              <a className=" text-gray-500 transition-all duration-300 hover:text-orange-500" href="/home"> <FaFacebookF  className=" w-6 h-6" /></a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;