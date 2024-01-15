

const ServiecsPage = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom web design solutions.',
      image:"https://i.ibb.co/qM4NHsf/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg" , // Update with your actual image path
    },
    {
      title: 'Web Development',
      description: "Improve your website's search engine ranking.",
      image: "https://i.ibb.co/XJDxPQs/domenico-loia-h-GV2-Tf-Oh0ns-unsplash-1.jpg" , // Update with your actual image path
    },
    {
      title: 'Mobile App Development',
      description: 'Create mobile apps for iOS and Android.',
      image: "https://i.ibb.co/DpJbRPH/firmbee-com-Sp-VHcbu-Ki6-E-unsplash.jpg", // Update with your actual image path
    },
    {
      title: 'SEO Optimization',
      description: "Improve your website's search engine ranking.",
      image: "https://i.ibb.co/L0y2FW8/merakist-CNb-Rs-Qj8m-HQ-unsplash.jpg" 
    },
    {
      title: 'Courier & Delivery Services',
      description: 'Bright and colorful web template ideal for couriers and a wide range of businesses.',
      image: "https://i.ibb.co/NC16Ffj/jon-tyson-sd1cy-Kulw4s-unsplash.jpg" 
    },
    {
      title: 'Professional Services',
      description: 'Calm web design that includes everything the modern business needs to communicate.',
      image: "https://i.ibb.co/5hZ7Fxm/arlington-research-Kz8n-HVg-t-GI-unsplash.jpg"  // Update with your actual image path
    },
  ];
  return (
    <div className="container mx-auto py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={service.image}
            alt={service.title}
            className="w-full  object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ServiecsPage;