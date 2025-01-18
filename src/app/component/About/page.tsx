import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-8 lg:px-16 mt-10">
      {/*/ Header Section *****/}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-customGreen leading-tight my-10">
          About Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
          We are a passionate team dedicated to delivering high-quality content and meaningful experiences. Our mission is to inspire, inform, and connect with our audience.
        </p>
      </div>

      {/* Vision Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 my-16 w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-customGreen mb-6 text-center">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
          To be a platform that fosters creativity, innovation, and meaningful discussions, empowering individuals and communities around the globe.
        </p>
      </div>

      {/* Team Section */}
      <div className="my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-customGreen text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600">Content Strategist</p>
            <p className="text-gray-500 text-sm mt-4">
              Passionate about storytelling and connecting with audiences through impactful narratives.
            </p>
          </div>

          {/* Repeat for more team members */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-gray-600">Lead Developer</p>
            <p className="text-gray-500 text-sm mt-4">
              Building innovative solutions and ensuring seamless user experiences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="text-gray-500 text-sm mt-4">
              Crafting intuitive and visually appealing designs for modern applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
