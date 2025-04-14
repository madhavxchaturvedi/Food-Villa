import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="relative min-h-screen  bg-white flex items-center justify-end px-4 py-20">
      {/* Top Purple / Bottom White Split */}
      <div className="absolute inset-0">
        <div className="h-[45%] bg-[#EB5B00] flex items-end">
          <div className="flex flex-col ml-36 my-auto">
            <h2 className="text-5xl text-white font-semibold mb-4">
              Get In Touch
            </h2>
            <p className="font-medium my-2 text-lg text-white">
              Feel free to contact us? submit your queries here and we <br />{" "}
              will get back to you soon as possible.
            </p>
          </div>
        </div>
        <div className="h-1/2 bg-white">
          <div className="space-y-4 text-sm flex flex-col ml-36 my-auto">
            <div className="flex items-center gap-3 mt-14">
              <span className="gap-5 flex items-center text-gray-800">
                <FontAwesomeIcon className="text-lg" icon={faPhone} />
                <span className="text-lg">470-601-1911</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="gap-5 flex items-center text-gray-800">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                <span className="text-lg">foodvilla@gmail.com</span>
              </span>
            </div>

            <div className="flex gap-5 mt-8 text-xl">
              <div className="text-center">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <div className="flex justify-center gap-7 my-8  text-2xl">
                  <a href="#" className="text-blue-600 text-4xl">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" className="text-blue-400 text-4xl">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="text-pink-600 text-4xl">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" className="text-black text-4xl">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="#" className="text-red-600 text-4xl">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Form Card */}
      <div className="relative z-10 w-full max-w-xl  bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden mr-10">
        {/* Right Form Section */}
        <div className="bg-white p-10 ">
          <h3 className="text-3xl font-semibold mb-14">Send Us Message</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full border border-gray-300 px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#EB5B00] text-white py-3 rounded-full font-medium hover:opacity-80 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
