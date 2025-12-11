export const colorCode = (color: string) => {
  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] == color)
      return i;
  }
    return 0;
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue",
                      "violet", "grey", "white"];
