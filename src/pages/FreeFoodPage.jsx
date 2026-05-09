import FoodListingPage from "../components/FoodListingPage";
import freeFoodListings from "../data/freeFoodListings.json";

const FreeFoodPage = () => {
  return <FoodListingPage title="free food" listings={freeFoodListings} ctaLabel="contribute" />;
};

export default FreeFoodPage;
