export interface GameDetails {
    videoUrl: string;
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    developer: string;
    release_date: string;
    platform: string;
    minimum_system_requirements: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    game_url: string;
    genre: string;
    screenshots: { id: number; image: string }[];
  }

export interface Game {
  platform: string;
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  release_date: string;
  categories: string[];
}


export interface GameItemProps {
  game: Game;
  onPress: () => void;
}