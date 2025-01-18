const Contact = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-8 lg:px-16 py-12 mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-customGreen">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? Fill out the form
          below, and we will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 max-w-xl mx-auto space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-customGreen text-white font-semibold py-3 rounded-lg hover:bg-customPurple-dark transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
