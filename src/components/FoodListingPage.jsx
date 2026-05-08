import { useMemo, useState } from "react";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import "../styles/listing-page.css";

function FoodListingPage({ title, listings, ctaLabel }) {
  const districts = useMemo(
    () => [...new Set(listings.map((item) => item.district))],
    [listings]
  );
  const cities = useMemo(() => [...new Set(listings.map((item) => item.city))], [listings]);

  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(
    () =>
      listings.filter((item) => {
        const districtMatch = district ? item.district === district : true;
        const cityMatch = city ? item.city === city : true;
        const text = `${item.name} ${item.district} ${item.city}`.toLowerCase();
        const queryMatch = query ? text.includes(query.toLowerCase()) : true;
        return districtMatch && cityMatch && queryMatch;
      }),
    [city, district, listings, query]
  );

  return (
    <div className="listing-page">
      <main className="listing-shell">
        <HomeHeader />
        <section className="filter-wrap">
          <div className="filter-bar">
            <div className="location-pill">📍</div>
            <select value={district} onChange={(event) => setDistrict(event.target.value)}>
              <option value="">District</option>
              {districts.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <select value={city} onChange={(event) => setCity(event.target.value)}>
              <option value="">City</option>
              {cities.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="search-pill">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={`Search ${title}`}
              />
              <span>🔍</span>
            </div>
          </div>
        </section>

        <section className="listing-grid">
          {filteredItems.map((item) => (
            <article className="listing-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.district}</p>
              <p>{item.city}</p>
              {item.price ? <span>{item.price}</span> : <span>Free</span>}
            </article>
          ))}
        </section>

        <section className="contribute-banner">
          <div className="banner-left">
            <img src="/man pic.png" alt="Foodiefree volunteer" />
            <img src="/Untitled (1).png" alt="Food plate" className="plate" />
          </div>
          <div className="banner-right">
            <p>
              Help your city discover trusted food places quickly. Add your local
              verified points with correct district, city, and serving details.
            </p>
            <button type="button">{ctaLabel}</button>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}

export default FoodListingPage;
