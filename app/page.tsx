import Image from "next/image";
import Appbar from "./components/Appbar";

export default function Home() {
  return <div className="bg-slate-100 h-screen">
    <Appbar/>
    <div className="flex justify-between text-7xl font-semibold mt-10 p-12">
      <div>
        Drivng Towards A <br></br>Sustainable Future
      </div>
      <div className="text-lg font-semibold text-slate-500 mt-5">
        At Arrow, we believe that the road to a better world starts <br></br> with Sustainable innovation. Our commitment to the<br></br> environment drives us to create eco-friendly solutions.
        <div>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  </div>  
}
