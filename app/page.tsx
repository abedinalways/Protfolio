import Hero from "@/sections/Hero";
import SystemStatus from "@/sections/SystemStatus";
import AboutTerminal from "@/sections/AboutTerminal";
import TechEcosystem from "@/sections/TechEcosystem";
import ProjectShowcase from "@/sections/ProjectShowcase";
import UnderTheHood from "@/sections/UnderTheHood";
import Lab from "@/sections/Lab";
import RealtimeActivity from "@/sections/RealtimeActivity";
import ExperienceTimeline from "@/sections/ExperienceTimeline";
import Metrics from "@/sections/Metrics";
import ContactFlow from "@/sections/ContactFlow";
import DevModeOverlay from "@/components/DevModeOverlay";
import CommandPalette from "@/components/CommandPalette";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <>
      <Hero />
      <SystemStatus />
      <AboutTerminal />
      <TechEcosystem />
      <ProjectShowcase />
      <UnderTheHood />
      <Lab />
      <RealtimeActivity />
      <ExperienceTimeline />
      <Metrics />
      <ContactFlow />
      <DevModeOverlay />
      <CommandPalette />
      <AIChat />
    </>
  );
}
