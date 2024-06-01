import axios from 'axios';
import { GameDetails } from '../components/interfaces';

export const fetchGameDetails = async (gameId: number): Promise<GameDetails | null> => {
  try {
    const response = await axios.get<GameDetails>(`https://www.freetogame.com/api/game?id=${gameId}`);
    const gameDetails: GameDetails = response.data;

    gameDetails.videoUrl = `https://www.freetogame.com/g/${gameId}/videoplayback.webm`;

    return gameDetails;
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};
