import FoodListingPage from "../components/FoodListingPage";
import lowCostListings from "../data/lowCostListings.json";

const LowCostFoodPage = () => {
  return <FoodListingPage title="low cost food" listings={lowCostListings} ctaLabel="add food" />;
};

export default LowCostFoodPage;
