import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import gameItemStyles from '../styles/GameItem';

import { Game, GameItemProps } from './interfaces';

import windows from '../assets/games/windows.png';
import browser from '../assets/games/browser.png';

const renderPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'PC (Windows)':
      return <Image source={windows} style={gameItemStyles.platformIcon} />;
      case 'Web Browser':
        return <Image source={browser} style={gameItemStyles.platformIcon} />;
    
    default:
      return null;
  }
};

const GameItem: React.FC<GameItemProps> = ({ game, onPress }) => {
  return (
    <TouchableOpacity style={gameItemStyles.container} onPress={onPress}>
      <View style={gameItemStyles.imageContainer}>
        <Image source={{ uri: game.thumbnail }} style={gameItemStyles.thumbnail} />
        <Text style={gameItemStyles.gameGenre}>{game.genre}</Text>
      </View>
      <View style={gameItemStyles.textContainer}>
        <Text style={gameItemStyles.title}>{game.title}</Text>
        <View style={gameItemStyles.releaseDesContainer}>
        <Text style={gameItemStyles.gameDescription}>{game.short_description}</Text>
        </View>
        <View style={gameItemStyles.platformContainer}>
          {renderPlatformIcon(game.platform)}
        </View>
        <View style={gameItemStyles.releaseDateContainer}>
          <Text style={gameItemStyles.gameDate}>Création : {game.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameItem;
