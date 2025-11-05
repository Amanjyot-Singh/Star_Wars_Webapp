export const getSpeciesColor = (speciesName?: string): string => {
  if (!speciesName) return "hsl(var(--species-default))";
  
  const colorMap: Record<string, string> = {
    "Human": "hsl(var(--species-human))",
    "Droid": "hsl(var(--species-droid))",
    "Wookiee": "hsl(var(--species-wookiee))",
    "Rodian": "hsl(var(--species-rodian))",
    "Hutt": "hsl(var(--species-hutt))",
  };

  return colorMap[speciesName] || "hsl(var(--species-default))";
};
