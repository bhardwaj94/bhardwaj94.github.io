import React from "react";

export default function Experience({ entries }) {
  return (
    <section className="rx-block" id="experience">
      <header className="rx-block-header">
        <span className="rx-block-num">01</span>
        <h2 className="rx-block-title">Experience</h2>
        <div className="rx-block-rule" />
      </header>

      <div className="rx-timeline">
        {entries.map((entry, i) => (
          <article key={i} className={`rx-item ${entry.current ? "is-current" : ""}`}>
            <div className="rx-item-marker">
              <span className="rx-dot" />
              {i < entries.length - 1 && <span className="rx-line" />}
            </div>

            <div className="rx-item-content">
              <div className="rx-item-head">
                <div>
                  <h3 className="rx-role">{entry.role}</h3>
                  <p className="rx-company">
                    {entry.company}
                    {entry.current && <span className="rx-badge">Current</span>}
                  </p>
                </div>
                <div className="rx-item-meta">
                  <span className="rx-period">{entry.period}</span>
                  <span className="rx-loc">{entry.location}</span>
                </div>
              </div>

              {entry.bullets.length > 0 && (
                <ul className="rx-bullets">
                  {entry.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}

              {entry.tags && entry.tags.length > 0 && (
                <div className="rx-tag-row">
                  {entry.tags.map((t) => (
                    <span key={t} className="rx-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
