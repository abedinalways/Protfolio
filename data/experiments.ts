export interface Experiment {
  id: string;
  title: string;
  tech: string;
  desc: string;
  color: string;
}

export const EXPERIMENTS: Experiment[] = [
  { id: "webgl-particles", title: "WebGL Particles", tech: "Three.js", desc: "GPU-accelerated particle systems for immersive backgrounds", color: "#6366f1" },
  { id: "ai-chatbot", title: "AI Chatbot", tech: "OpenAI", desc: "Context-aware conversational interface with streaming responses", color: "#8b5cf6" },
  { id: "motion-paths", title: "Motion Paths", tech: "Framer Motion", desc: "Complex gesture-driven animations with spring physics", color: "#06b6d4" },
  { id: "voice-ui", title: "Voice UI", tech: "Web Speech", desc: "Hands-free navigation using speech recognition", color: "#22c55e" },
  { id: "webgpu", title: "WebGPU Compute", tech: "WebGPU", desc: "Parallel computing in the browser for real-time simulations", color: "#f59e0b" },
  { id: "generative-art", title: "Generative Art", tech: "Canvas API", desc: "Algorithmic artwork with procedural generation", color: "#ef4444" },
  { id: "spatial-ui", title: "Spatial UI", tech: "WebXR", desc: "Immersive 3D interfaces for mixed reality", color: "#ec4899" },
  { id: "edge-functions", title: "Edge Functions", tech: "Vercel", desc: "Serverless compute at the edge for ultra-low latency", color: "#14b8a6" },
];