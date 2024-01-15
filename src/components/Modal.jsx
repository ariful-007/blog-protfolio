

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 flex w-full h-full items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className=" modal-container">
        <div className=" bg-indigo-200 text-center p-5 h-96 lg:w-[500px] rounded shadow-lg">
            <h1 className=" text-2xl font-extrabold font-primary mb-4  mt-6 uppercase text-black">Please login here</h1>
            <form className=" px-4">
              <div className=" mb-5">
                  <input type="email" id="email" name="email" placeholder="example@gmail.com" 
                  className=" w-[80%] rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1 focus:shadow-md]"
                  />
              </div>
              <div>
                  <input type="password" id="password" name="password" placeholder=" Enter Your Password" 
                  className=" w-[80%] rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1 focus:shadow-md]"
                  />
              </div>
              <div className=" mt-6">
              <button  className=" bg-orange-500 px-12 py-2 uppercase font-medium rounded hover:bg-white hover:text-orange-500
                transition-all duration-300 ease-in
                ">Login</button>
              </div>
              <button onClick={onClose}  className=" bg-orange-500 px-12 py-2 mt-5 uppercase font-medium rounded hover:bg-white hover:text-orange-500
                transition-all duration-300 ease-in
                ">Close</button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Modal;