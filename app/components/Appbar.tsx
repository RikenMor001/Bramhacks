
export default function Appbar(){

    return <div className="flex justify-between p-3 bg-zinc-300	">
        <div className="flex justify-center text-2xl font-bold mb-10">
            <button>
                Arrow
            </button>
        </div>
        <div className="flex justify-between">
            <div className="flex mt-1 text-slate-700 font-semibold">
                <div className="hover:text-slate-800 mr-8">
                    <button>
                        Home
                    </button>
                </div>
                <div className="mr-8 hover:text-slate-800">
                    <button>
                        Models
                    </button>
                </div>
                <div className="mr-8 hover:text-slate-800">
                    <button>
                        Maps
                    </button>
                </div>
                <div className="mr-8 hover:text-slate-800">
                    <button>
                        Resources
                    </button>
                </div>
            </div>
            <div className="mr-2">
                <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-10">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
}


