import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Experience & Certificates
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
            <p className="text-gray-700">Certificate from XYZ Academy</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">WordPress Developer</h3>
            <p className="text-gray-700">1 year of experience</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Chrome Extension Developer</h3>
            <p className="text-gray-700">1 year of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
