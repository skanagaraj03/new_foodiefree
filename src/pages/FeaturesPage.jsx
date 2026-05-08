import FoodListingPage from "../components/FoodListingPage";
import freeFoodListings from "../data/freeFoodListings.json";

const FeaturesPage = () => {
  return <FoodListingPage title="free food" listings={freeFoodListings} ctaLabel="contribute" />;
};

export default FeaturesPage;
