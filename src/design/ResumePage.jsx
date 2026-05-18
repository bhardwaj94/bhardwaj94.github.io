import React from "react";
import Sidebar from "./Sidebar";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import data from "./data";
import "./styles.css";

export default function ResumePage() {
  return (
    <div className="rx-app">
      <div className="rx-bg-grid" aria-hidden />
      <div className="rx-bg-glow rx-bg-glow-a" aria-hidden />
      <div className="rx-bg-glow rx-bg-glow-b" aria-hidden />

      <div className="rx-layout">
        <Sidebar data={data} />

        <main className="rx-main">
          <section className="rx-hero">
            <p className="rx-hero-eyebrow">— Introduction</p>
            <h2 className="rx-hero-title">
              I build <span className="rx-accent-text">scalable web applications</span> that perform at scale.
            </h2>
            <p className="rx-hero-body">{data.about}</p>

            <div className="rx-metrics">
              {data.metrics.map((m, i) => (
                <div key={i} className="rx-metric">
                  <div className="rx-metric-value">{m.value}</div>
                  <div className="rx-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          <Experience entries={data.experience} />
          <Projects entries={data.projects} />
          <Education entries={data.education} />

          <footer className="rx-footer">
            <p>
              Designed & built by{" "}
              <span className="rx-accent-text">{data.name}</span>
            </p>
            <p className="rx-footer-meta">© {new Date().getFullYear()} · Crafted with React</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
