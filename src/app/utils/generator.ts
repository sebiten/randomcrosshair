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
  "0 0 0", // black
];

const getRandomInt = (min: number, mid: number, max: number): number => {
  // Genera un número aleatorio entre 0 y 1
  const random = Math.random();

  if (random < 0.5) {
    // Si el número aleatorio es menor que 0.5, generar un número en el rango [min, mid)
    return Math.floor(Math.random() * (mid - min)) + min;
  } else {
    // Si el número aleatorio es mayor o igual que 0.5, generar un número en el rango [mid, max]
    return Math.floor(Math.random() * (max - mid + 1)) + mid;
  }
};

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateRandomCrosshair = (): CrosshairConfig => {
  return {
    size: getRandomInt(1, 1.5, 2), // Limitar tamaño entre 1 y 2
    thickness: getRandomInt(0, 0.5, 1),
    gap: getRandomInt(-4, -3.5, -3), // Limitar gap entre -4 y -3
    color: getRandomElement(colors),
    outline: Math.random() < 1,
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
