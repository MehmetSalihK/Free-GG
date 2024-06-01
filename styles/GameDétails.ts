import { StyleSheet } from 'react-native';

const GameDetailsStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'joystix-monospace',
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  ttitle: {
    fontFamily: 'joystix-monospace',
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    alignItems: 'center',
    color: 'white',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
    color: 'white',
  },
  details: {
    marginBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#929292DA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenshot: {
    width: 200,
    height: 120,
    marginRight: 10,
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  likesContainer: {
    marginBottom: 20,
  },
  likes: {
    marginBottom: 5,
    color: 'white',
  },
  comment: {
    marginBottom: 5,
    color: 'white',
  },
  FavoritesButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    width: '15%',
    marginBottom: 10,
  },
  ContainerFavory: {
    backgroundColor: '#000000B4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  TitleFavorie: {
    color: 'white',
    fontWeight: 'bold',
  },

  ContainerInfo: {
    backgroundColor: '#000000B4',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },

  ContainerDescription: {
    backgroundColor: '#000000B4',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },

  ContainerScreenshots: {
    backgroundColor: '#000000B4',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  ContainerTitle: {
    backgroundColor: '#000000B4',
    borderRadius: 5,
    marginBottom: 10,
  },


  ContainerDroiteGauche : {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  
  sectionText: {
    alignItems: 'center',
  },
  sectionGameInfo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default GameDetailsStyles;
