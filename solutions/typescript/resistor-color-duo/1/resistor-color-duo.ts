export function decodedValue(inputColors: string[]) {
  return ((COLORS.indexOf(inputColors[0])*10) + COLORS.indexOf(inputColors[1]) );
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];