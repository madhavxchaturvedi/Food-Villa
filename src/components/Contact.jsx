import { useState } from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add Firebase or backend submission logic here
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#EB5B00] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2">We’re here to help. Reach out to us anytime.</p>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        {/* Customer Support & FAQs */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold">Customer Support</h2>
            <p className="text-gray-700 mt-2">
              Need help with an order? Our support team is available 24/7.
            </p>
            <p className="mt-2 font-semibold">Email: support@biteme.com</p>
            <p className="font-semibold">Phone: +91 98765 43210</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">FAQs</h2>
            <p className="text-gray-700 mt-2">
              Find answers to common questions <a href="#" className="text-black underline">here</a>.
            </p>
            
            

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-indigo-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="text-center mt-12">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <a href="#" className="text-blue-600">Facebook</a>
            <a href="#" className="text-blue-400">Twitter</a>
            <a href="#" className="text-pink-600">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
