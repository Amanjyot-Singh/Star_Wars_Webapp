import { format } from "date-fns";

export const formatDate = (dateString: string): string => {
  try {
    return format(new Date(dateString), "dd-MM-yyyy");
  } catch {
    return "Unknown";
  }
};

export const formatHeight = (height: string): string => {
  const h = parseInt(height);
  return isNaN(h) ? "Unknown" : `${(h / 100).toFixed(2)} m`;
};

export const formatMass = (mass: string): string => {
  const m = parseInt(mass);
  return isNaN(m) ? "Unknown" : `${m} kg`;
};

export const formatPopulation = (population: string): string => {
  const p = parseInt(population);
  if (isNaN(p)) return population;
  
  if (p >= 1e9) return `${(p / 1e9).toFixed(1)}B`;
  if (p >= 1e6) return `${(p / 1e6).toFixed(1)}M`;
  if (p >= 1e3) return `${(p / 1e3).toFixed(1)}K`;
  
  return p.toString();
};
