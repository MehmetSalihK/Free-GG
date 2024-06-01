import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import GameDetailsScreen from './GameDetailsScreen';
import LoadingScreen from './LoadingScreen';
import { homeScreenOptions, gameDetailsScreenOptions } from '../styles/NavigationOptions';
import * as Font from 'expo-font';

type RootStackParamList = {
  Home: undefined;
  GameDetails: { gameId: number };
};

const Fonts = {
  'SupplyCenter': require('../assets/fonts/SupplyCenter.ttf'),
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(Fonts);
      setFontLoaded(true);
      setLoading(false);
    };

    loadFonts();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handlePlatformChange = (platform: string, category: string) => {
    setSelectedPlatform(platform);
    toggleModal();
  };

  if (loading || !fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={gameDetailsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
