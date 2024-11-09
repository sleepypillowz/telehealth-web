// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

                  {/* Schedule Section */}
                  <section id="schedule" className="bg-gray-100 p-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold">Schedule and Operating Hours</h2>
          <p className="mb-8 text-gray-600">Our hospital operates 10:00 AM - 6:00 PM, with specific departments available during the hours below.</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Pediatrics</h3>
              <p className="mt-2 text-gray-500">Mon - Fri: 9:00 AM - 4:00 PM</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Radiology</h3>
              <p className="mt-2 text-gray-500">Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Pharmacy</h3>
              <p className="mt-2 text-gray-500">Mon - Sun: 8:00 AM - 10:00 PM</p>
            </div>
            {/* Add more departments as needed */}
          </div>
        </div>
      </section>

      {/* Location and Contact Information */}
      <section className="bg-white p-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-semibold">Visit Us</h2>
          <p className="mb-4 text-gray-600">Find us at Old Samson Rd, Quezon City, 1106 Metro Manila</p>
          <p className="text-gray-600">For appointments and inquiries, please contact us at 0945 239 5382 or 0999 820 5684.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
