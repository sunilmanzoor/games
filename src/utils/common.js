import { GAME_CATEGORY } from "../config/constants";

export const filterByCategory = (games, category) => {
  if (category === GAME_CATEGORY.ALL) {
    return games;
  }
  return games.filter((game) => game.category === category);
};

export const filterByTitle = (games, title) => {
  if (title && games) {
    return games.filter((game) =>
      game.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  return games;
};
