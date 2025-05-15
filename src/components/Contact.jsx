import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] ">
      <div className="flex justify-center items-center pt-32">
        <form
          method="POST"
          action="https://getform.io/f/anlqvgea"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8  ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or shoot me an email -
              harrisontimothy1024@gmail.com
            </p>
          </div>
          <input
            required
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            required
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            required
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
          />
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
