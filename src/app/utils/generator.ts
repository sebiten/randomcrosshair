interface CrosshairConfig {
  size: number;
  thickness: number;
  gap: number;
  color: string;
  outline: boolean;
}

const colors = [
  "255 255 255", // White
  "0 255 0", // Green
  "255 0 0", // Red
  "0 0 255", // Blue
  "255 255 0", // Yellow
];

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateRandomCrosshair = (): CrosshairConfig => {
  return {
    size: getRandomInt(1, 2), // Limitar tamaño entre 1 y 2
    thickness: getRandomInt(0, 1),
    gap: getRandomInt(-4, -3), // Limitar gap entre -4 y -3
    color: getRandomElement(colors),
    outline: Math.random() < 0.5,
  };
};

export const generateCrosshairCommands = (config: CrosshairConfig): string => {
  const commands = [
    `cl_crosshairsize ${config.size}`,
    `cl_crosshairthickness ${config.thickness}`,
    `cl_crosshairgap ${config.gap}`,
    `cl_crosshaircolor_r ${config.color.split(" ")[0]}`,
    `cl_crosshaircolor_g ${config.color.split(" ")[1]}`,
    `cl_crosshaircolor_b ${config.color.split(" ")[2]}`,
    `cl_crosshair_drawoutline ${config.outline ? 1 : 0}`,
  ];
  return commands.join("; ") + ";";
};
