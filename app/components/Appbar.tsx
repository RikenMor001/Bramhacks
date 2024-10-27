

export default function Appbar(){
    return <div className="flex justify-between p-3 bg-slate-100">
        <div className="flex justify-center  text-2xl font-bold">
            Arrow
        </div>
        <div className="flex justify-between">
            <div className="flex mt-1 text-slate-500 font-semibold">
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
                        Company
                    </button>
                </div>
                <div className="mr-8 hover:text-slate-800">
                    <button>
                        Resources
                    </button>
                </div>
            </div>
            <div className="mr-2">
                <button className="text-black bg-slate-300 hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    Contact Us
                </button>
            </div>
        </div>
    </div>
}