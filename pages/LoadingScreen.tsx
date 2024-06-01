import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'BeachSunny': require('../assets/fonts/BeachSunny.ttf'),
  });
};

const LoadingScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [dots, setDots] = useState<string>('.');

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') {
          return '.';
        } else {
          return prev + '.';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={require('../assets/game.gif')} style={styles.background}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
        <Text style={styles.text}>Chargement{dots}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    bottom: -70,
    left: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 30,
    fontFamily: 'BeachSunny',
  },
  activityIndicator: {
    position: 'absolute',
    left: 60,
    top: -20,
  },
});

export default LoadingScreen;
