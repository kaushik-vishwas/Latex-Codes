import { Link } from "react-router-dom";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function AllCodesPage() {
  return (
    <div className="page all-codes-page">
      <nav className="code-nav">
        <Link to="/" className="back-link">
          ← Home
        </Link>
      </nav>

      <main className="list">
        {questions.map((item) => (
          <QuestionCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}