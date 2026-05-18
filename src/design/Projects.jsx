import React from "react";
import { IconArrow } from "./icons";

export default function Projects({ entries }) {
  return (
    <section className="rx-block" id="projects">
      <header className="rx-block-header">
        <span className="rx-block-num">02</span>
        <h2 className="rx-block-title">Selected Projects</h2>
        <div className="rx-block-rule" />
      </header>

      <div className="rx-project-grid">
        {entries.map((p, i) => {
          const Tag = p.url ? "a" : "article";
          const linkProps = p.url
            ? { href: p.url, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Tag key={i} className="rx-project" {...linkProps}>
              <div className="rx-project-head">
                <h3 className="rx-project-name">{p.name}</h3>
                <IconArrow className="rx-project-arrow" />
              </div>
              <p className="rx-project-desc">{p.description}</p>
              <div className="rx-tag-row">
                {p.stack.map((t) => (
                  <span key={t} className="rx-tag rx-tag-soft">
                    {t}
                  </span>
                ))}
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
