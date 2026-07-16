import { useState } from "react";
import katex from "katex";

function renderLatex(text) {
  if (!text) return null;

  const parts = [];
  const regex = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={key++}>{text.slice(lastIndex, match.index)}</span>
      );
    }

    const isDisplay = match[1] !== undefined;
    const math = isDisplay ? match[1] : match[2];

    try {
      const html = katex.renderToString(math.trim(), {
        displayMode: isDisplay,
        throwOnError: false,
        strict: "ignore",
      });
      parts.push(
        <span
          key={key++}
          className={isDisplay ? "math-display" : "math-inline"}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      parts.push(<span key={key++}>{match[0]}</span>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return parts;
}

export default function QuestionCard({ item }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(item.answer);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = item.answer;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <article className="card">
      <header className="card-header">
        <div className="card-meta">
          <span className="card-num">Q{item.id}</span>
          <h2 className="card-title">{item.title}</h2>
        </div>
        <button
          type="button"
          className={`copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy answer code"
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </header>

      <section className="card-question">
        <p className="section-label">Question</p>
        <div className="question-body">{renderLatex(item.question)}</div>
      </section>

      <section className="card-answer">
        <p className="section-label">Answer</p>
        <pre className="code-block">
          <code>{item.answer}</code>
        </pre>
      </section>
    </article>
  );
}
