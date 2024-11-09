import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { name: 'Patient', description: 'Manage patient records and information' },
  { name: 'Appointment', description: 'Schedule and manage patient appointments' },
  { name: 'Medicine', description: 'View and manage available medicines' },
];

function Admin() {
  return (
    <div>
      {/* Main Content */}
      <main className="p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold text-black">{service.name}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
              {/* Use Link directly as a clickable element */}
              <Link
                to={`/${service.name.toLowerCase()}`}
                className="btn mt-4 inline-block rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
              >
                Go to {service.name}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Admin;
