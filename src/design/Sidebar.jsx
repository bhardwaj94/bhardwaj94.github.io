import React from "react";
import {
  IconMail,
  IconPhone,
  IconPin,
  IconGithub,
  IconLinkedin,
  IconDownload,
  IconArrow,
} from "./icons";

export default function Sidebar({ data }) {
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <aside className="rx-sidebar">
      <div className="rx-sidebar-inner">
        <div className="rx-profile">
          <div className="rx-avatar">
            <span>{initials}</span>
          </div>
          <div className="rx-status">
            <span className="rx-status-dot" /> Available for opportunities
          </div>
          <h1 className="rx-name">{data.name}</h1>
          <p className="rx-title">{data.title}</p>
          <p className="rx-tagline">{data.tagline}</p>
        </div>

        <button className="rx-cta" onClick={() => window.print()}>
          <IconDownload className="rx-icon" />
          <span>Download Resume</span>
        </button>

        <div className="rx-section">
          <h3 className="rx-label">Contact</h3>
          <ul className="rx-contact">
            <li>
              <IconMail className="rx-icon" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </li>
            <li>
              <IconPhone className="rx-icon" />
              <a href={`tel:${data.phone.replace(/\s/g, "")}`}>{data.phone}</a>
            </li>
            <li>
              <IconPin className="rx-icon" />
              <span>{data.location}</span>
            </li>
          </ul>
        </div>

        <div className="rx-section">
          <h3 className="rx-label">Connect</h3>
          <div className="rx-social">
            <a href={data.social.github} target="_blank" rel="noreferrer" className="rx-social-link">
              <IconGithub className="rx-icon" />
              <span>GitHub</span>
              <IconArrow className="rx-icon rx-social-arrow" />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="rx-social-link">
              <IconLinkedin className="rx-icon" />
              <span>LinkedIn</span>
              <IconArrow className="rx-icon rx-social-arrow" />
            </a>
          </div>
        </div>

        <div className="rx-section">
          <h3 className="rx-label">Stack</h3>
          <div className="rx-skills">
            {data.skills.map((group) => (
              <div key={group.category} className="rx-skill-group">
                <p className="rx-skill-cat">{group.category}</p>
                <div className="rx-chips">
                  {group.items.map((item) => (
                    <span key={item} className="rx-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
