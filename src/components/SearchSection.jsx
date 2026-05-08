function formatAvailability(spot) {
  if (spot.availabilityType === "daily") return "Daily";
  if (spot.availabilityType === "weekly") return `Every ${spot.days.join(", ")}`;
  return `Special: ${spot.days.join(", ")}`;
}

function SearchSection({ foodSpots }) {
  return (
    <section className="search-section">
      <h2>here you can search the free food by your location</h2>
      <p>
        Find providers by district and see if they serve daily, specific weekdays,
        or festival/special days.
      </p>
      <div className="search-box">
        <input type="text" placeholder="Search district (example: Erode)" />
        <button type="button" aria-label="search">
          🔍
        </button>
      </div>
      <div className="food-grid">
        {foodSpots.map((spot) => (
          <article key={spot.id} className="food-card">
            <h3>{spot.name}</h3>
            <p>{spot.district}</p>
            <p>{spot.area}</p>
            <p>{spot.timing}</p>
            <span>{formatAvailability(spot)}</span>
          </article>
        ))}
      </div>
      <button type="button" className="primary-btn">
        see more
      </button>
    </section>
  );
}

export default SearchSection;
