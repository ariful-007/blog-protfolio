

const AboutePage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <img
            src="https://i.ibb.co/6XbX3jf/jason-goodman-Oalh2-Moj-Uuk-unsplash.jpg" 
            alt="About Us"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan ligula vel semper
            luctus. Integer et justo vel metus condimentum consectetur vel non justo. Nunc congue,
            tortor nec tincidunt venenatis, augue sem posuere nulla, in pharetra lacus turpis id libero.
          </p>
          <button className=" mt-3 font-medium rounded-sm text-sm border-gray-500 bg-orange-500 py-2 px-7 hover:bg-indigo-600 hover:text-white duration-500">Download CV</button>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-gray-700">
            Vestibulum et turpis risus. Quisque id mauris euismod, condimentum lacus id, volutpat nisl.
            Integer vestibulum, metus sit amet tincidunt congue, dolor libero fermentum urna, a
            consectetur libero libero vel purus. Etiam lacinia ligula vitae elit sollicitudin, eu
            tristique purus bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutePage;