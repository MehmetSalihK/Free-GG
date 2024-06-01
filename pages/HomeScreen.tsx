import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, RefreshControl, Modal, TextInput } from 'react-native';
import GameItem from '../components/GameItem';
import { accueilStyles } from '../styles/Acceuil';
import { fetchGames, fetchGamesByCategory } from '../services/apiService';
import LoadingScreen from './LoadingScreen';
import Error404Screen from './Error404Screen';
import { FontAwesome } from '@expo/vector-icons';
import { platformOptions, categoryOptions } from '../services/constants';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [games, setGames] = useState<any[]>([]);
  const [gamesToShow, setGamesToShow] = useState<number>(10);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [tempSelectedPlatform, setTempSelectedPlatform] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error404, setError404] = useState<boolean>(false);
  const [refreshingScroll, setRefreshingScroll] = useState<boolean>(false);
  const [showRoundButton, setShowRoundButton] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [favoriteGames, setFavoriteGames] = useState<number[]>([]);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [sortedAlphabetically, setSortedAlphabetically] = useState<boolean>(false);

  
  const loadRandomGames = async () => {
    try {
      let data;
      if (selectedCategory === 'all') {
        data = await fetchGames(selectedPlatform);
      } else {
        data = await fetchGamesByCategory(selectedCategory);
      }
      const shuffledGames = data.sort(() => Math.random() - 0.5);
      
      let filteredGames = shuffledGames;
      if (showFavorites) {
        filteredGames = filteredGames.filter((game: { id: number; }) => favoriteGames.includes(game.id));
      }
  
      setGames(filteredGames.filter((game: { title: string; }) => game.title.toLowerCase().includes(searchText.toLowerCase())));
      setLoading(false);
      setError404(false);
    } catch (error: any) {
      console.error('Error fetching games:', error);
      setLoading(false);
      if (error.response && error.response.status === 404) {
        setError404(true);
      } 
    }
  };
  

  useEffect(() => {
    loadRandomGames();
  }, [selectedPlatform, selectedCategory, searchText]);

  const togglePlatformButtons = () => {
    setModalVisible(true);
  };

  const handlePlatformChange = (platform: string) => {
    setTempSelectedPlatform(platform);
  };

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
  };

  const handleToggleFavorite = (gameId: number) => {
    const isFavorite = favoriteGames.includes(gameId);

    if (isFavorite) {
      const updatedFavorites = favoriteGames.filter(id => id !== gameId);
      setFavoriteGames(updatedFavorites);
    } else {
      setFavoriteGames(prevFavorites => [...prevFavorites, gameId]);
    }
  };

  const handleToggleShowFavorites = () => {
    setShowFavorites(prevState => !prevState);
  };

  const handleFinishSelection = () => {
    setSelectedPlatform(tempSelectedPlatform);
    setSelectedCategories(selectedCategories);
    setModalVisible(false);
  };

  const handleGamePress = (gameId: number) => {
    navigation.navigate('GameDetails', { gameId });
    navigation.navigate('GameDetails', { gameId, isFavorite: favoriteGames.includes(gameId) });
  };

  const handleCategoryPress = async (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortAlphabetically = () => {
    let sortedGames;
    if (!sortedAlphabetically) {
      sortedGames = [...games].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      sortedGames = [...games].sort((a, b) => a.id - b.id);
    }
  
    setGames(sortedGames);
    setSortedAlphabetically(!sortedAlphabetically);
  };  

  const onScrollRefresh = () => {
    setRefreshingScroll(true);
    setTimeout(async () => {
      setRefreshingScroll(false);
      await loadRandomGames();
    }, 1000);
  };

  const handleScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const height = event.nativeEvent.contentSize.height;
    const screenHeight = event.nativeEvent.layoutMeasurement.height;
    const isScrolledToBottom = currentOffset + screenHeight >= height;
    setShowRoundButton(isScrolledToBottom);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (error404) {
    return <Error404Screen onRetry={loadRandomGames} />;
  }
  
  return (
    <ImageBackground source={require('../assets/games.jpg')} style={accueilStyles.backgroundImage} blurRadius={2}>
      <Text style={accueilStyles.Espace}></Text>
      <ScrollView
        style={accueilStyles.container}
        refreshControl={<RefreshControl refreshing={refreshingScroll} onRefresh={onScrollRefresh} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        indicatorStyle="white"
      >
        <View style={accueilStyles.ButtonContainer}>
          <TouchableOpacity style={accueilStyles.ParametreButton} onPress={togglePlatformButtons}>
            <Text style={{ fontSize: 24 }}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accueilStyles.sortButton} onPress={handleSortAlphabetically}>
            <Text style={{ fontSize: 24 }}>🔠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={accueilStyles.FavoritesButton} onPress={handleToggleShowFavorites}>
          <Text style={{ fontSize: 24 }}>❤️</Text>
        </TouchableOpacity>
        </View>

        <TextInput
        style={accueilStyles.searchBar}
        placeholder="Rechercher un jeu..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={accueilStyles.modalContainer}>
          <View style={accueilStyles.modalContent}>
            <View style={accueilStyles.modalHeader}>
              <Text style={accueilStyles.modalTitle}>Les Platforms</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={accueilStyles.closeButton}>
                <FontAwesome name="times-circle" size={20} color="black" style={accueilStyles.closeButtonIcon} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={accueilStyles.buttonContainer}>

              {platformOptions.map((platform, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handlePlatformChange(platform)}
                    style={{
                      paddingVertical: 10,
                      marginRight: 10,
                      paddingHorizontal: 20,
                      backgroundColor: tempSelectedPlatform === platform ? 'blue' : 'lightblue',
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: tempSelectedPlatform === platform ? 'white' : 'black' }}>
                      {platform === 'all' ? 'ALL' : platform.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ))}


              </View>
            </ScrollView>
            <Text style={accueilStyles.modalTitle}>Les Catégories</Text>
            <ScrollView>
              <View style={accueilStyles.buttonContainer}>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

              {categoryOptions.map((category, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => handleCategoryChange(category)}
                style={{
                  padding: 10,
                  margin: 5,
                  backgroundColor: selectedCategory === category ? 'blue' : 'lightblue',
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: selectedCategory === category ? 'white' : 'black' }}>
                  {category.toUpperCase()}
                </Text>
              </TouchableOpacity>
              ))}

              </View>

              </View>
            </ScrollView>
            <TouchableOpacity onPress={handleFinishSelection} style={accueilStyles.terminerButton}>
              <Text style={accueilStyles.terminerTitle}>Terminer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showFavorites ? (
        favoriteGames.length > 0 ? (
          games
            .filter(game => favoriteGames.includes(game.id))
            .slice(0, gamesToShow)
            .map((game, index) => (
              <View key={index}>
                <GameItem game={game} onPress={() => handleGamePress(game.id)} />
                <TouchableOpacity onPress={() => handleToggleFavorite(game.id)} style={accueilStyles.favoriteButton}>
                  {favoriteGames.includes(game.id) ? (
                    <FontAwesome name="heart" size={24} color="red" />
                  ) : (
                    <FontAwesome name="heart-o" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            ))
        ) : (
          <Text style={accueilStyles.noGamesText}>Aucun jeu favori trouvé.</Text>
        )
      ) : (
        games.length > 0 ? (
          games
            .slice(0, gamesToShow)
            .map((game, index) => (
              <View key={index}>
                <GameItem game={game} onPress={() => handleGamePress(game.id)} />
                <TouchableOpacity onPress={() => handleToggleFavorite(game.id)} style={accueilStyles.favoriteButton}>
                  {favoriteGames.includes(game.id) ? (
                    <FontAwesome name="heart" size={24} color="red" />
                  ) : (
                    <FontAwesome name="heart-o" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            ))
        ) : (
          <Text style={accueilStyles.noGamesText}>Ce jeu n'existe pas ou n'a pas été trouvé.</Text>
        )
      )}

      {!showFavorites && games.length > 0 && games.length > gamesToShow && (
        <TouchableOpacity onPress={() => setGamesToShow(prev => prev + 20)} style={accueilStyles.roundButton}>
          <Text style={{ fontSize: 24 }}>⬇️</Text>
        </TouchableOpacity>
      )}


      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
