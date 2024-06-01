import { StyleSheet } from 'react-native';

export const accueilStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundImage: require('../assets/fond.jpg'),
  },
  gif: {
    width: 200,
    height: 140,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    blurRadius: 50,
  },

  roundButton: {
    flex: 1,
    top: -120,
    right: -8,
    borderRadius: 5,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 10,
  },

  Espace: {
    marginBottom: 60,
  },
  Erreur: {
    backgroundColor: '#3A53536D',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    blurRadius: 50,
  },
  ErreurTitle: {
    color: "#690B0B",
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
    fontWeight: 'bold',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontFamily: 'Bad-Signal',
  },
  platformTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  platformTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  selectedPlatformTab: {
    backgroundColor: '#1F6CBE',
  },
  platformTabText: {
    color: '#000',
    fontWeight: 'bold',
  },

  ButtonContainer: {
    flexDirection: 'row', 
    alignItems: 'center',

  },

  ParametreButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    left: 125,
    width: '35%',
    marginBottom: 10,
  },

  sortButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    left: -125,
    width: '15%',
    marginBottom: 10,
  },

  FavoritesButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    left: 125,
    width: '15%',
    marginBottom: 10,
  },

  categoryButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    left: 125,
    width: '15%',
    marginBottom: 10,
  },  

  platformButtonsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  platformButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
  },
  platformButtonSelected: {
    backgroundColor: '#AAAAAA',
  },
  platformIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  image: {
    position: 'absolute',
    bottom: 53,
    left: -125,
    width: 24,
    height: 24,
    tintColor: 'white',
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  BouttonParametre: {
    flex: 1,
    padding: 10,
    bottom: -600,
  },
  BouttonParametre2: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#FFFFFFD7', 
    padding: 20, 
    width: 428,
    height: 330,
    borderRadius: 10,
  },
  BouttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  arrierePlanBouton: {
    flex: 1,
    backgroundColor: '#00000075',
    borderRadius: 10,
    justifyContent: 'center',
    backdropFilter: 'blur(5px)'
  },

  

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    color: "white",
    marginTop: 10,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  closeButtonIcon: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
  terminerButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FF0000D2',
    padding: 10,
    borderRadius: 5,
  },
  terminerTitle: {
    color: 'white',
  },
  selectedCategory: {
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  favoriteButton: {
    position: 'absolute',
    backgroundColor: '#7575756B',
    padding: 5,
    alignItems: 'center',
    width: '15%',
    marginBottom: 3,
    bottom: 5,
    right: 8,
  },

  coeurRouge: {
    name: "heart", 
    size: 24 ,
    color: "red",
  },
  coeurNoir: {
    name: "heart-o", 
    size: 24 ,
    color: "black",
  },

  searchBar: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  noGamesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'white',
  }
});
