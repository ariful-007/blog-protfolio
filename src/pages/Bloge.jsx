import BlogePage from "../components/BlogePage";


const Bloge = () => {
  return (
    <div>
      <div className=" py-40  px-4 mx-auto text-center bg-black text-white">
        <h2 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary " >Bloge Page</h2>
      </div>
      {/* ====all bloges container===== */}
      <div className="max-w-7xl mx-auto">
        <BlogePage></BlogePage>
      </div>
    </div>
  );
};

export default Bloge;