import { NavLink } from "react-router-dom";
import { FaFacebookF,FaCreativeCommonsNd  } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Modal from "./Modal";


const Navbar = () => {
  const [menuOpen , setMenuOpen] = useState(false)
  const[isModal, setIsModal] = useState(false)

  const toggleMenu =()=>{
    setMenuOpen(!menuOpen)
  }

  const nabItem =[
    {id:'/home', link:"Home"},
    {id:'/about', link:"About"},
    {id:'/service', link:"Services"},
    {id:'/blog', link:"Bloge"},
    {id:'/contact', link:"Contact"},
  ]

  // modal open
  const openModal = () =>{
    setIsModal(true)
  }

  const closeModal = () =>{
    setIsModal(false)
  }

  return (
    <header className=" bg-black text-white fixed top-0 left-0 right-0">
      <nav className=" py-4 px-4 max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <a className=" text-xl font-bold text-white" href="/home">AI-<span className=" text-orange-500">BD</span></a>

        {/* ===navitem for lg devices=== */}
        <ul className=" md:flex gap-12 text-lg hidden">
          {
            nabItem.map(({id, link})=> <li className=" text-white" key={id}>
              <NavLink  className={({ isActive, isPending }) =>
                isActive 
                ? "active":
                isPending 
                ? "pending": 
                ""
              }
              to={id}>{link}</NavLink>
            </li>)
          }
        </ul>
        {/* === mene icon=== */}
        <div className=" text-white lg:flex gap-4 items-center hidden">
          <a className=" hover:text-orange-500 duration-500" href="/home"> <FaFacebookF /></a>
          <a className=" hover:text-orange-500 duration-500" href="/home"> <FaCreativeCommonsNd /></a>
          <a className=" hover:text-orange-500 duration-500" href="/home"> <FaTwitter /></a>
          <button onClick={openModal} className=" bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
          transition-all duration-300 ease-in
          ">Log In</button>
        </div>

        <Modal isOpen={isModal} onClose={closeModal}/>


         {/* === mene item=== */}
        <div className=" md:hidden">
          <button onClick={toggleMenu} className=" cursor-pointer">
            {
              menuOpen ? <IoMdClose className=" w-5 h-5" /> : <MdMenu className=" w-5 h-5" />
            }
          </button>
        </div>
      </nav>
      {/* === mene item only for mobile === */}
      <div>
          <ul className={`md:hidden gap-12 text-lg block space-y-4 py-6 px-4 mt-14 bg-white ${menuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
            {
              nabItem.map(({id, link})=> <li className=" text-black" key={id}>
                <NavLink onClick={toggleMenu} to={id}>{link}</NavLink>
              </li>)
            }
          </ul>
        </div>
    </header>
  );
};

export default Navbar;