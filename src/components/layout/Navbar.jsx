import { FiCloud, FiSun } from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <FiCloud className="text-sky-400 text-3xl" />
          
          <h1 className="text-2xl font-bold tracking-wide">
            WeatherNow
          </h1>
        </div>

        <button className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300">
          <FiSun className="text-yellow-400 text-xl" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;