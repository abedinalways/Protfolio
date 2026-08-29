export interface Metric {
  value: number;
  label: string;
  suffix?: string;
}

export const METRICS: Metric[] = [
  { value: 50, label: "Projects Shipped", suffix: "+" },
  { value: 15, label: "Technologies Mastered", suffix: "+" },
  { value: 5, label: "Years Building", suffix: "+" },
  { value: 100, label: "Experiments Built", suffix: "+" },
  { value: 200, label: "Components Created", suffix: "+" },
];