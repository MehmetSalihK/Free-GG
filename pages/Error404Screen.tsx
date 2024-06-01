import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import LoadingScreen from './LoadingScreen';
import { accueilStyles } from '../styles/Acceuil';
import * as Font from 'expo-font';

interface Error404ScreenProps {
  onRetry: () => void;
}

const Error404Screen: React.FC<Error404ScreenProps> = ({ onRetry }) => {
  const [retrying, setRetrying] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(true);
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Bad-Signal': require('../assets/fonts/Bad-Signal.ttf'),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const handleRetry = async () => {
    setRetrying(true);
    await onRetry();
    setRetrying(false);
  };

  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  if (retrying) {
    return <LoadingScreen />;
  }

  if (showError) {
    return (
      <View style={accueilStyles.Erreur}>
        <Image source={require('../assets/404.gif')} style={accueilStyles.gif} />
        <Text style={accueilStyles.ErreurTitle}>Les jeux ne peuvent pas être chargés.</Text>
        <Button title="Réessayer" onPress={handleRetry} />
      </View>
    );
  }

  return null;
};

export default Error404Screen;
