import AboutePage from "../components/AboutePage";
import Banner from "../components/Banner";
import BlogePage from "../components/BlogePage";
import ContactPage from "../components/ContactPage";
import ServiecsPage from "../components/ServiecsPage";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" max-w-7xl mx-auto">
        <AboutePage></AboutePage>
      </div>
      <div className=" max-w-7xl mx-auto">
        <ServiecsPage></ServiecsPage>
      </div>
      <div className=" max-w-7xl mx-auto">
        <ContactPage></ContactPage>
      </div>
      <div className=" max-w-7xl mx-auto">
      <BlogePage></BlogePage>
      </div>
    </div>
  );
};

export default Home;