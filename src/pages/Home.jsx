import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import SearchSection from "../components/SearchSection";
import HomeActionsSection from "../components/HomeActionsSection";
import HomeFooter from "../components/HomeFooter";
import foodSpots from "../data/foodSpots.json";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <main className="home-shell">
        <HomeHeader />
        <HomeHero />
        <SearchSection foodSpots={foodSpots} />
        <HomeActionsSection />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Home;
