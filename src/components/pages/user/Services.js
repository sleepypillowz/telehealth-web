import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStethoscope, faUser, faChild, faXRay } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    { name: 'Emergency Care', description: 'Immediate medical attention for critical conditions', icon: <FontAwesomeIcon icon={faHeart} className="text-3xl text-red-500" /> },
    { name: 'Cardiology', description: 'Expert heart care services', icon: <FontAwesomeIcon icon={faStethoscope} className="text-3xl text-blue-500" /> },
    { name: 'Surgical Services', description: 'Advanced surgical procedures for various conditions', icon: <FontAwesomeIcon icon={faUser} className="text-3xl text-green-500" /> },
    { name: 'Pediatric Care', description: 'Comprehensive healthcare for children', icon: <FontAwesomeIcon icon={faChild} className="text-3xl text-yellow-500" /> },
    { name: 'Diagnostic Imaging', description: 'Cutting-edge imaging technologies for diagnosis', icon: <FontAwesomeIcon icon={faXRay} className="text-3xl text-purple-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Our Services</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center">
              <div className="rounded-full bg-sky-100 p-3">
                {service.icon} {/* Directly use the FontAwesomeIcon component here */}
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">{service.name}</h2>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
