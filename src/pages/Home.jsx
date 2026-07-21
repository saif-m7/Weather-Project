import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import WeatherCard from "../components/weather/WeatherCard";
function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <WeatherCard/>
    </main>
  );
}

export default Home;