import React, { useState } from 'react';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Badd  Mai Karunga
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Resume:', resume);
  };

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="font-bold font-mono bg-transparent border border-black px-8 pt-6 pb-8 mb-4">
      <div className=" mb-4 flex">
        <div className="mr-4 w-1/2">
          <label className=" block text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-transparet appearance-none border  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="font-bold font-mono bg-transparent appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="font-bold font-mono bg-transparent appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="resume">
          Upload Resume
        </label>
        <input
          
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-green-500 hover:border border-black text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;
