import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to FoodieFree</h1>
          <p>
            Discover amazing recipes, connect with food lovers, and share your
            culinary adventures. Join our community today!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/man pic.png" alt="Foodie enjoying meal" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
