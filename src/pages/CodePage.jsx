import { Link, useParams, Navigate } from "react-router-dom";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function CodePage() {
  const { id } = useParams();
  const item = questions.find((q) => String(q.id) === String(id));

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page code-page">
      <nav className="code-nav">
        <Link to="/" className="back-link">
          ← Home
        </Link>
      </nav>

      <QuestionCard item={item} />
    </div>
  );
}
