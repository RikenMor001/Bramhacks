import Image from "next/image";
import Appbar from "../components/Appbar";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-zinc-300 to-gray-100 min-h-screen flex flex-col scroll-smooth">
      <Appbar />

      {/* Home Section */}
      <section id="home" className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-6">
          Driving Towards A Sustainable Future
        </h1>
        <p className="text-lg font-medium text-gray-700 max-w-3xl mb-8">
          At Arrow, we believe that the road to a better world starts with sustainable innovation.
          Our commitment to the environment drives us to create eco-friendly solutions that make a positive impact.
        </p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10">
          Demo Drive
        </button>
      </section>

      {/* Image and Statistics Section */}
      <div className="relative w-full max-w-5xl mx-auto my-12">
        <Image
          className="w-full h-auto rounded-lg shadow-2xl"
          src="https://www.investontario.ca/sites/default/files/styles/max_1300x1300/public/media_library/newsrelease-arrow-3d-printed-ev-canada.jpg?itok=vw5qETtM"
          alt="Project Arrow Car"
          width={1300}
          height={800}
          priority
        />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <div className="bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 text-center">
            <h2 className="text-2xl font-semibold">350</h2>
            <p className="text-sm">Miles</p>
            <p className="text-xs text-gray-300">Range</p>
          </div>
          <div className="bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 text-center">
            <h2 className="text-2xl font-semibold">3.2</h2>
            <p className="text-sm">Seconds</p>
            <p className="text-xs text-gray-300">0-60 mph</p>
          </div>
          <div className="bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 text-center">
            <h2 className="text-2xl font-semibold">100%</h2>
            <p className="text-sm">Electric</p>
            <p className="text-xs text-gray-300">Eco-Friendly</p>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <section id="models" className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Models</h2>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          {/* Add individual model cards */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-700">Model X</h3>
            <p className="text-sm text-gray-600 mt-2">A high-performance electric vehicle with a long range and sleek design.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-700">Model Y</h3>
            <p className="text-sm text-gray-600 mt-2">An eco-friendly car with the latest technology for a comfortable ride.</p>
          </div>
          {/* Add more model cards as needed */}
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Explore Our Maps</h2>
        <div className="flex justify-center">
          {/* Placeholder map */}
          <div className="bg-gray-200 rounded-lg shadow-md w-full h-96 flex items-center justify-center">
            <p className="text-gray-500">Interactive map goes here</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Resources</h2>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-700">User Guide</h3>
            <p className="text-sm text-gray-600 mt-2">Learn how to make the most out of your vehicle with our comprehensive user guide.</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-72 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-700">FAQs</h3>
            <p className="text-sm text-gray-600 mt-2">Find answers to common questions and support resources.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
            <input className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500" type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-gray-500" id="message"  placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
