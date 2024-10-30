import Image from "next/image";
import Appbar from "../components/Appbar";

export default function Dashboard() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col">
      <Appbar />
      <div className="flex flex-col items-center text-center mt-16 p-4">
        <h1 className="text-6xl font-bold mb-6">Driving Towards A Sustainable Future</h1>
        <p className="text-lg font-medium text-gray-600 max-w-2xl mb-8">
          At Arrow, we believe that the road to a better world starts with sustainable innovation.
          Our commitment to the environment drives us to create eco-friendly solutions.
        </p>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10">
          Demo Drive
        </button>
      </div>
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
            <p className="text-xs text-gray-300">0-60 MPH</p>
          </div>
          <div className="bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 text-center">
            <h2 className="text-2xl font-semibold">30</h2>
            <p className="text-sm">Minutes</p>
            <p className="text-xs text-gray-300">80% Charge</p>
          </div>
        </div>
      </div>
    </div>
  );
}
