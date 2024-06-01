import axios from 'axios';
import { API_URL } from './api';

export const fetchGamesByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${API_URL}?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching games by category:', error);
    throw error;
  }
};

export const fetchGames = async (selectedPlatform: string) => {
  try {
    const response = await axios.get(`${API_URL}?platform=${selectedPlatform}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};
