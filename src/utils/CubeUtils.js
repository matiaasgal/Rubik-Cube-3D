export const getFaceColors = (x, y, z, cubeSize = 3) => {
  const colors = [
    0xffffff, // R: blanco 
    0xffff00, // L: amarillo 
    0x0000ff, // U: azul 
    0x00ff00, // D: verde 
    0xffa500, // F: naranja 
    0xff0000  // B: rojo
  ];
  const defaultColor = 0x606060; // gris interno

  return [
    x === cubeSize - 1 ? colors[0] : defaultColor, // Right (+X)
    x === 0            ? colors[1] : defaultColor, // Left (-X)
    y === cubeSize - 1 ? colors[2] : defaultColor, // Up (+Y)
    y === 0            ? colors[3] : defaultColor, // Down (-Y)
    z === cubeSize - 1 ? colors[4] : defaultColor, // Front (+Z)
    z === 0            ? colors[5] : defaultColor  // Back (-Z)
  ];
};