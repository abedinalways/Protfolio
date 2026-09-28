import { STARRED } from "@/data/activity";
import { PROFILE } from "@/data/profile";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { StarIcon, RepoIcon, TableIcon, PackageIcon, PlusIcon } from "./icons";

export function StarsPanel() {
  const ref = useGsapReveal<HTMLDivElement>(0.03);

  return (
    <div ref={ref}>
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-[16px] font-semibold">
          Stars{" "}
          <span className="gh-counter ml-1">{PROFILE.stars}</span>
        </h1>
        <span className="ml-auto text-[13px] text-text-muted">
          {STARRED.length} starred repositories
        </span>
      </div>

      <div className="gh-box overflow-hidden">
        {STARRED.map((repo) => {
          const [owner, name] = repo.fullName.split("/");
          return (
            <a
              key={repo.fullName}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="repo-list-item flex items-start gap-3"
              data-reveal
            >
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-bg-raised text-text-muted">
                <RepoIcon size={16} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[16px] font-semibold text-accent">
                    <span className="text-text-muted">{owner}/</span>
                    {name}
                  </span>
                  <span className="rounded-full border border-border px-2 text-[11px] leading-5 text-text-muted">
                    Public
                  </span>
                </span>
                {repo.description && (
                  <span className="mt-1 block line-clamp-2 text-[14px] leading-5 text-text-muted">
                    {repo.description}
                  </span>
                )}
                <span className="mt-2 flex items-center gap-4 text-[12px] text-text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="lang-dot"
                        style={{ background: repo.color, width: 10, height: 10 }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <StarIcon size={14} />
                    {repo.stars}
                  </span>
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function EmptyState({
  icon,
  title,
  body,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  action: string;
}) {
  return (
    <div className="gh-box flex flex-col items-center px-6 py-16 text-center">
      <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-bg-raised text-text-muted">
        {icon}
      </span>
      <h1 className="text-[24px] font-semibold">{title}</h1>
      <p className="mt-2 max-w-md text-[14px] leading-6 text-text-muted">
        {body}
      </p>
      <button className="gh-btn gh-btn-primary mt-5">
        <PlusIcon size={16} />
        {action}
      </button>
    </div>
  );
}

export function ProjectsPanel() {
  return (
    <EmptyState
      icon={<TableIcon size={28} />}
      title="Projects"
      body="Track software development projects on GitHub with boards — nothing has been created here yet."
      action="New project"
    />
  );
}

export function PackagesPanel() {
  return (
    <EmptyState
      icon={<PackageIcon size={28} />}
      title="GitHub Packages"
      body="Packages allow you to host and manage packages such as containers and other artifacts alongside their code. No packages published yet."
      action="New package"
    />
  );
}
