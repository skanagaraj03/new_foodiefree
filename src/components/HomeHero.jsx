function HomeHero() {
  return (
    <section className="hero-section">
      <div className="shape shape-left" />
      <div className="shape shape-top" />
      <div className="hero-text">
        <p className="hero-tagline">Order restaurant food, takeaway and groceries.</p>
        <h1>
          <span className="accent">sharing</span> is caring
          <br />
          share <span className="accent">more</span>
          <br />
          eat more
        </h1>
        <button type="button" className="primary-btn">
          find
        </button>
      </div>
      <div className="hero-image-wrap">
        <div className="circle-grid" />
        <img src="/man pic.png" alt="Person enjoying food" className="hero-image" />
      </div>
    </section>
  );
}

export default HomeHero;
