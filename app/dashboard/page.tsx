import Image from "next/image";
import Appbar from "../components/Appbar";

export default function Dashboard() {
  return (
    <div className="bg-zinc-300 min-h-screen flex flex-col scroll-smooth">
      <Appbar />
      {/* Home Section */}
      <div id="home" className="flex flex-col items-center text-center mt-16 p-4">
        <h1 className="text-6xl font-bold mb-6">Driving Towards A Sustainable Future</h1>
        <p className="text-lg font-medium text-gray-600 max-w-2xl mb-8">
          At Arrow, we believe that the road to a better world starts with sustainable innovation.
          Our commitment to the environment drives us to create eco-friendly solutions.
        </p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10">
          Demo Drive
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-5xl mx-auto">
        <img
          className="w-full h-auto rounded-lg"
          src="https://www.investontario.ca/sites/default/files/styles/max_1300x1300/public/media_library/newsrelease-arrow-3d-printed-ev-canada.jpg?itok=vw5qETtM"
          alt="Project Arrow Car"
        />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
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
            <h2 className="text-2xl font-semibold">400</h2>
            <p className="text-sm">kW</p>
            <p className="text-xs text-gray-300">Power</p>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <section id="models" className="mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Our Models</h2>
        <p className="text-gray-600 mb-6">
          Explore our lineup of innovative and eco-friendly electric vehicles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <h3 className="text-2xl font-semibold">Model A</h3>
            <p className="text-gray-500">The ultimate balance of power and efficiency.</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <h3 className="text-2xl font-semibold">Model B</h3>
            <p className="text-gray-500">Luxury redefined with a sustainable touch.</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <h3 className="text-2xl font-semibold">Model C</h3>
            <p className="text-gray-500">Compact, yet spacious with advanced tech.</p>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section id="maps" className="mt-20 p-8 bg-zinc-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Charging Station Maps</h2>
        <p className="text-gray-600 mb-6">
          Locate charging stations and plan your journeys effortlessly.
        </p>
        <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Interactive Map Placeholder</span>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Resources</h2>
        <p className="text-gray-600 mb-6">
          Discover articles, guides, and FAQs to learn more about our mission and technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">Guide to Electric Vehicles</h3>
            <p className="text-gray-500">An in-depth look into the advantages of EVs.</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold">Sustainability Reports</h3>
            <p className="text-gray-500">Our efforts and progress toward eco-friendliness.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="mt-20 p-8 bg-zinc-100 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or want to get in touch? We’re here to help!
        </p>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded-lg"></textarea>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}




