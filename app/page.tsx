"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useApp } from "@/lib/providers";
import ProfileNav from "@/components/github/ProfileNav";
import ProfileSidebar from "@/components/github/ProfileSidebar";
import ReadmeCard from "@/components/github/ReadmeCard";
import {
  TechStack,
  Experience,
  Education,
} from "@/components/github/ReadmeSections";
import { ConnectWithMe, GitHubStats } from "@/components/github/ReadmeStats";
import PinnedRepos from "@/components/github/PinnedRepos";
import ContributionGraph from "@/components/github/ContributionGraph";
import ActivityFeed from "@/components/github/ActivityFeed";
import RepositoriesPanel from "@/components/github/RepositoriesPanel";
import { StarsPanel, ProjectsPanel, PackagesPanel } from "@/components/github/MiscPanels";

export default function Home() {
  const { tab } = useApp();

  /* content height changes with every tab — keep ScrollTrigger accurate */
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [tab]);

  return (
    <>
      <ProfileNav />

      <div className="gh-container">
        <div className="gh-grid">
          <ProfileSidebar />

          <div className="min-w-0">
            {tab === "overview" && (
              <>
                <ReadmeCard>
                  <TechStack />
                  <Experience />
                  <Education />
                  <ConnectWithMe />
                  <GitHubStats />
                </ReadmeCard>

                <PinnedRepos />
                <ContributionGraph />
                <ActivityFeed />
              </>
            )}

            {tab === "repositories" && <RepositoriesPanel />}
            {tab === "projects" && <ProjectsPanel />}
            {tab === "packages" && <PackagesPanel />}
            {tab === "stars" && <StarsPanel />}
          </div>
        </div>
      </div>
    </>
  );
}
