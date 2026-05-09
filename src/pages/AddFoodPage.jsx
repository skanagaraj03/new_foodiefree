import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import "../styles/add-food.css";

const AddFoodPage = () => {
  return (
    <div className="add-food-page">
      <main className="add-food-shell">
        <HomeHeader />
        <section className="add-food-hero">
          <div className="add-food-overlay">
            <form className="add-food-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="foodName">Food name :</label>
              <input id="foodName" type="text" />

              <label htmlFor="description">Description :</label>
              <textarea id="description" rows="4" />

              <label htmlFor="district">District :</label>
              <input id="district" type="text" />

              <label htmlFor="city">City :</label>
              <input id="city" type="text" />

              <label htmlFor="mapLink">Map link:</label>
              <input id="mapLink" type="url" />

              <label>Food provided :</label>
              <div className="choice-row">
                <button type="button" className="chip">Daily</button>
                <button type="button" className="chip">Particular days</button>
                <button type="button" className="chip">Special day</button>
              </div>

              <label htmlFor="dayChoice">Which day :</label>
              <select id="dayChoice">
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </select>

              <label htmlFor="foodImage">Food Image</label>
              <input id="foodImage" type="file" />

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
};

export default AddFoodPage;
