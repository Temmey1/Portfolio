import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#0a192f] ">
     <div className="flex justify-center items-center pt-32 px-4 sm:px-8">
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
              Submit the form below or shoot me an email —&nbsp;
              <a
                href="mailto:harrisontimothy1024@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Harrison%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20really%20impressed%20with%20your%20work.%20I%20would%20love%20to%20discuss%20a%20potential%20collaboration%20or%20project%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A"
                className="text-pink-500 hover:underline"
              >
                harrisontimothy1024@gmail.com
              </a>
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
