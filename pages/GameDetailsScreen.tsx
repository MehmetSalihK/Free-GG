import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, ScrollView, Linking, ImageBackground, FlatList, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { GameDetails } from '../components/interfaces';
import { fetchGameDetails } from '../services/gameService';
import { accueilStyles } from '../styles/Acceuil';

import LoadingScreen from './LoadingScreen';
import gameItemStyles from '../styles/GameItem';
import GameDétailsStyles from '../styles/GameDétails';

import { faHeart as solidHeart, faHeart } from '@fortawesome/free-solid-svg-icons';
import * as Font from 'expo-font';

const Fonts = {
  'joystix-monospace': require('../assets/fonts/joystix-monospace.ttf'),
};

const GameDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { gameId, isFavorite } = route.params;
  const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [favorite, setFavorite] = useState<boolean>(isFavorite);
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  const gestureRef = useRef(null);

  useEffect(() => {
    const { gameId } = route.params;
    loadGameDetails(gameId);

    const loadFonts = async () => {
      await Font.loadAsync(Fonts);
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const loadGameDetails = async (gameId: number) => {
    const details = await fetchGameDetails(gameId);
    setGameDetails(details);
  };

  const handleOpenLink = () => {
    if (gameDetails && gameDetails.game_url) {
      Linking.openURL(gameDetails.game_url);
    }
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  

  const handleOpenFullscreenImage = (imageUrl: string, index: number) => {
    if (gameDetails) {
      setFullscreenImage(imageUrl);
      setCurrentImageIndex(index);
    }
  };  

  const handlePreviousImage = () => {
    if (gameDetails) {
      setCurrentImageIndex(prevIndex => (prevIndex === 0 ? gameDetails.screenshots.length - 1 : prevIndex - 1));
    }
  };
  
  const handleNextImage = () => {
    if (gameDetails) {
      setCurrentImageIndex(prevIndex => (prevIndex === gameDetails.screenshots.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleCloseFullscreenImage = () => {
    setFullscreenImage(null);
  };

  if (!gameDetails || !fontLoaded) {
    return <LoadingScreen />;
  }

  if (!gameDetails || !fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: 'white'}}>Non disponible</Text>
      </View>
    );
  }

  const handleGestureEvent = (event: any) => {
    if (event.nativeEvent.translationX > 50) {
      handlePreviousImage();
    } else if (event.nativeEvent.translationX < -50) {
      handleNextImage();
    }
  };

  return (
    <ImageBackground source={require('../assets/games.jpg')} style={accueilStyles.backgroundImage} blurRadius={2}>
      <ScrollView 
        style={{ padding: 20, marginTop: 50 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        indicatorStyle="white"
        scrollIndicatorInsets={{ top: 10, bottom: 10 }}
      >
        <View style={GameDétailsStyles.container}>
          <Text style={accueilStyles.Espace}></Text>
          <Image source={{ uri: gameDetails.thumbnail }} style={GameDétailsStyles.thumbnail} resizeMode="cover" />

          <View style={GameDétailsStyles.ContainerTitle}>
          <Text style={GameDétailsStyles.ttitle}>{gameDetails.title}</Text>
          </View>

          <View style={GameDétailsStyles.ContainerFavory}>
          <TouchableOpacity style={GameDétailsStyles.FavoritesButton}>
            <FontAwesomeIcon icon={favorite ? solidHeart : faHeart} size={24} color={favorite ? 'red' : 'black'} />
          </TouchableOpacity>
          <Text style={GameDétailsStyles.TitleFavorie}>{favorite ? 'Ce jeu est marqué comme favori' : 'Ce jeu n\'est pas marqué comme favori'}</Text>
          </View>

          <View style={GameDétailsStyles.ContainerInfo}>
          <View style={GameDétailsStyles.ContainerDroiteGauche}>
            <View style={[GameDétailsStyles.sectionText]}>
            <Text style={GameDétailsStyles.sectionGameInfo}>Développeur</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.developer}</Text>

              <Text style={GameDétailsStyles.sectionGameInfo}>Date de sortie</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.release_date}</Text>
            </View>

            <View style={[GameDétailsStyles.sectionText]}>
              <Text style={GameDétailsStyles.sectionGameInfo}>Plateforme</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.platform}</Text>

              <Text style={GameDétailsStyles.sectionGameInfo}>Catégorie</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.genre}</Text>
            </View>

          </View>
            <Text style={{color: "white"}}>------------------------------------------------------</Text>

              <Text style={GameDétailsStyles.title}>Configuration minimale requise</Text>
            <View style={[GameDétailsStyles.sectionText]}>
              <Text style={GameDétailsStyles.sectionGameInfo}>Système d'exploitation</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.minimum_system_requirements?.os}</Text>

              <Text style={GameDétailsStyles.sectionGameInfo}>Processeur</Text>
              <Text style={GameDétailsStyles.details}>{gameDetails.minimum_system_requirements?.processor}</Text>


            </View>

              <View style={[GameDétailsStyles.sectionText]}>

                <Text style={GameDétailsStyles.sectionGameInfo}>Mémoire</Text>
                <Text style={GameDétailsStyles.details}>{gameDetails.minimum_system_requirements?.memory}</Text>
    
                <Text style={GameDétailsStyles.sectionGameInfo}>Graphiques</Text>
                <Text style={GameDétailsStyles.details}>{gameDetails.minimum_system_requirements?.graphics}</Text>
    
                <Text style={GameDétailsStyles.sectionGameInfo}>Stockage</Text>
                <Text style={GameDétailsStyles.details}>{gameDetails.minimum_system_requirements?.storage}</Text>

            </View>
               
              <TouchableOpacity onPress={handleOpenLink} style={GameDétailsStyles.button}>
                <Text style={GameDétailsStyles.buttonText}>Voir le jeu sur le site web</Text>
              </TouchableOpacity>

          </View>


          <View style={GameDétailsStyles.ContainerDescription}>
          <Text style={GameDétailsStyles.title}>Déscription</Text>
            <Text style={GameDétailsStyles.description}>{gameDetails.description}</Text>
          </View>
          
          <View style={GameDétailsStyles.ContainerScreenshots}>
            <Text style={GameDétailsStyles.title}>Captures d'écran</Text>
          
            <FlatList
              data={gameDetails.screenshots || []}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleOpenFullscreenImage(item.image, index)}>
                  <Image
                    source={item.image ? { uri: item.image } : require('../assets/unnamed.png')}
                    style={gameItemStyles.screenshot}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />

            <Modal visible={!!fullscreenImage} transparent={true} animationType="fade">
              <PanGestureHandler
                ref={gestureRef}
                onGestureEvent={handleGestureEvent}
              >
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', alignItems: 'center' }}>

                  <TouchableOpacity style={{ position: 'absolute', top: 60, right: 20, zIndex: 999 }} onPress={handleCloseFullscreenImage}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Fermer</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ position: 'absolute', top: '50%', left: 20, zIndex: 999 }} onPress={handlePreviousImage}>
                    <FontAwesomeIcon icon={faArrowLeft} size={24} color="#fff" />
                  </TouchableOpacity>

                  <TouchableOpacity style={{ position: 'absolute', top: '50%', right: 20, zIndex: 999 }} onPress={handleNextImage}>
                    <FontAwesomeIcon icon={faArrowRight} size={24} color="#fff" />
                  </TouchableOpacity>

                  {fullscreenImage && gameDetails && gameDetails.screenshots[currentImageIndex] && (
                    <View style={{ width: '80%', height: '90%', alignItems: 'center' }}>
                      <Image
                        source={{ uri: gameDetails.screenshots[currentImageIndex].image }}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                      />
                      <View style={{ flexDirection: 'row', position: 'absolute', bottom: 290, zIndex: 999 }}>
                        <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>{currentImageIndex + 1}/{gameDetails.screenshots.length}</Text>
                      </View>
                    </View>
                  )}
                </View>
                  
              </PanGestureHandler>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default GameDetailsScreen;
