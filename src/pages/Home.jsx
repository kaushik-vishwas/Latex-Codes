import questions from "../data/questions";
import { getCardMeta } from "../data/homeCards";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <header className="home-hero">
        <p className="brand">Car Show</p>
        <h1 className="hero-title">The best brands for you </h1>
        <p className="hero-sub">
          Which one is your favorite. Click and see the overview of that, pricing and availability. 
        </p>
      </header>

      <main className="card-grid">
        {questions.map((item) => {
          const meta = getCardMeta(item.id);
          return (
            <div key={item.id} className="photo-card photo-card--static">
              <div className="photo-card-media">
                <img src={meta.image} alt={meta.name} loading="lazy" />
              </div>
              <div className="photo-card-body">
                <h2 className="photo-card-title">{meta.name}</h2>
              </div>
            </div>
          );
        })}
      </main>

      <footer className="footer">
        <Link to="/codes" className="topics-link">
          -
        </Link>
      </footer>
    </div>
  );
}
