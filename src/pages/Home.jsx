import { Link } from "react-router-dom";
import homeCards from "../data/homeCards";

export default function Home() {
  return (
    <div className="home">
      <header className="home-hero">
        <p className="brand">Car Show</p>
        <h1 className="hero-title">The best brands for you</h1>
        <p className="hero-sub">
          Which one is your favorite. Click and see the overview of that, pricing and availability.
        </p>
      </header>

      <main className="card-grid">
        {Object.entries(homeCards).map(([id, card]) => (
          <div key={id} className="photo-card photo-card--static">
            <div className="photo-card-media">
              <img src={card.image} alt={card.name} loading="lazy" />
            </div>

            <div className="photo-card-body">
              <h2 className="photo-card-title">{card.name}</h2>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <Link to="/codes" className="topics-link">
          -
        </Link>
      </footer>
    </div>
  );
}