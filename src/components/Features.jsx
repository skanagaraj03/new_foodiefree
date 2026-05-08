import { useState, useEffect } from "react";
import "./Features.css";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [apiFeatures, setApiFeatures] = useState([]);

  useEffect(() => {
    // Load dummy data from JSON file
    fetch("/src/data/features.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error loading features:", error));

    // Load data from internet
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        const apiData = data.map((item) => ({
          id: item.id + 100, // to avoid id conflict
          title: item.title.substring(0, 20) + "...",
          description: item.body.substring(0, 100) + "...",
          icon: "🌐",
        }));
        setApiFeatures(apiData);
      })
      .catch((error) => console.error("Error loading API features:", error));
  }, []);

  const allFeatures = [...features, ...apiFeatures];

  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="features-grid">
          {allFeatures.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
