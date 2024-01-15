import ServiecsPage from "../components/ServiecsPage";


const Service = () => {
  return (
    <div>
      <div className=" py-40  px-4 mx-auto text-center bg-black text-white">
        <h2 className=" text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary " >Services Page</h2>
      </div>
      <div className=" max-w-7xl mx-auto">
        <ServiecsPage></ServiecsPage>
      </div>
    </div>
  );
};

export default Service;