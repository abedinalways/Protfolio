import {
  SKILL_GROUPS,
  EXPERIENCE,
  EDUCATION,
  SPOKEN_LANGUAGE as SPOKEN,
} from "@/data/profile";

export function TechStack() {
  return (
    <section className="mt-8">
      <hr className="mb-6 border-border" />
      <h2 className="mb-5 text-[24px] font-semibold text-text">🛠️ Tech Stack</h2>

      <div className="flex flex-col gap-6">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <div key={group.title} data-reveal data-reveal-type="fade-up" style={{ transitionDelay: `${groupIndex * 0.1}s` }}>
            <h3 className="mb-3 text-[16px] font-semibold text-text">
              {group.title}:
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <span 
                  key={skill.name} 
                  className="chip magnetic-btn" 
                  data-reveal
                  data-reveal-type="scale"
                  style={{ transitionDelay: `${(groupIndex * 0.1) + (skillIndex * 0.05)}s` }}
                >
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{
                      background: skill.color,
                      boxShadow: "0 0 0 1px rgba(127,127,127,0.45)",
                    }}
                  />
                  <span className="font-semibold text-text">
                    {skill.name.toUpperCase()}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="mt-8">
      <hr className="mb-6 border-border" />
      <h2 className="mb-5 text-[24px] font-semibold text-text">💼 Experience</h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((job, index) => (
          <article 
            key={job.company} 
            className="flex flex-col gap-2"
            data-reveal
            data-reveal-type="fade-left"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-[16px] font-semibold text-text">
                {job.role}
                <span className="text-text-muted"> — </span>
                <span className="text-accent">{job.company}</span>
              </h3>
              <span className="text-[12px] text-text-muted">{job.period}</span>
              <span
                className="rounded-full border border-border px-2 py-0.5 text-[11px] text-text-muted"
              >
                {job.type}
              </span>
            </div>

            <ul className="flex flex-col gap-1.5 text-[14px] leading-6 text-text-muted">
              {job.bullets.map((b) => (
                <li key={b.text} className="flex gap-2">
                  <span className="text-green">▸</span>
                  <span>
                    {b.text}
                    {b.tech && (
                      <span className="ml-2 inline-flex flex-wrap gap-1.5 align-middle">
                        {b.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-sm border border-border px-1.5 py-px font-mono text-[11px] text-text-muted chip"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="mt-8">
      <hr className="mb-6 border-border" />
      <h2 className="mb-5 text-[24px] font-semibold text-text">🎓 Education</h2>

      <div className="flex flex-col gap-4">
        {EDUCATION.map((ed, index) => (
          <article
            key={ed.degree}
            className="rounded-md border border-border bg-bg-raised px-4 py-3"
            data-reveal
            data-reveal-type="fade-right"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-[15px] font-semibold text-text">{ed.degree}</h3>
            <p className="mt-1 text-[13px] text-text-muted">{ed.school}</p>
            <p className="mt-1 text-[12px] text-text-dim">
              {ed.session} · {ed.gpa}
            </p>
          </article>
        ))}
        <p className="text-[13px] text-text-muted" data-reveal data-reveal-type="fade-up">🗣️ {SPOKEN}</p>
      </div>
    </section>
  );
}
