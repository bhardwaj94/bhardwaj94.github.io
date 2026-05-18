import React from "react";

export default function Education({ entries }) {
  return (
    <section className="rx-block" id="education">
      <header className="rx-block-header">
        <span className="rx-block-num">03</span>
        <h2 className="rx-block-title">Education</h2>
        <div className="rx-block-rule" />
      </header>

      <div className="rx-edu-list">
        {entries.map((e, i) => (
          <article key={i} className="rx-edu-item">
            <div className="rx-edu-main">
              <h3 className="rx-degree">{e.degree}</h3>
              <p className="rx-institution">{e.institution}</p>
            </div>
            <span className="rx-period">{e.period}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
