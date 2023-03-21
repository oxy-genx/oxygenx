import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-400 py-12">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <p className="font-mono text-2xl text-white mb-6">
          Thank you for visiting
        </p>
        <div className="flex space-x-4 border px-4">
          <a
            href="/"
            className="font-mono text-white hover:text-gray-300 transition-colors"
          >
            About Us
          </a>
          <a
            href="/"
            className="font-mono text-white hover:text-gray-300 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="font-mono text-white hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <p className="font-mono text-white mt-8">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <div className="flex items-center justify-center mt-12">
          <a
            href="/"
            className="text-white hover:text-gray-300 transition-colors mx-4"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-300 transition-colors mx-4"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="/"
            className="text-white hover:text-gray-300 transition-colors mx-4"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
