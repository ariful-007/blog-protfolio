import AboutePage from "../components/AboutePage";


const About = () => {
  return (
    <div>
      <div className=" py-40  px-4 mx-auto text-center bg-black text-white">
        <h2 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary " >Bloge Page</h2>
      </div>
      <div className=" max-w-7xl mx-auto">
        <AboutePage></AboutePage>
      </div>
    </div>
  );
};

export default About;