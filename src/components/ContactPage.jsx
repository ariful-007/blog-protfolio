import  { useState } from 'react';
import Lottie from "lottie-react";
import contactAnimation from '../../public/Animation/contact.json'

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className=" py-12 max-w-7xl mx-auto flex justify-between items-center">
      
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md w-full sm:w-1/2">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"id="name"name="name"value={formData.name}onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"id="email"name="email"value={formData.email}onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"name="message"value={formData.message}onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 px-4 rounded font-medium focus:outline-none focus:shadow-outline-blue "
        >
          Submit
        </button>
      </form>
      </div>
      <div className=" w-full sm:w-1/2 -z-10">
        <Lottie  animationData={contactAnimation}></Lottie>
      </div>
    </div>
  );
};

export default ContactPage;