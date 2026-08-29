export interface StatusItem {
  label: string;
  status: string;
  color: string;
}

export const STATUS_ITEMS: StatusItem[] = [
  { label: "WEBGL", status: "ACTIVE", color: "#22c55e" },
  { label: "ANIMATION", status: "RUNNING", color: "#22c55e" },
  { label: "REALTIME", status: "CONNECTED", color: "#22c55e" },
  { label: "API", status: "ONLINE", color: "#22c55e" },
  { label: "DATABASE", status: "HEALTHY", color: "#22c55e" },
];