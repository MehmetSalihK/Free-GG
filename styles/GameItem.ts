import { StyleSheet } from 'react-native';

const gameItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    backgroundColor: '#0000009A',
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: '#C2212110',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  gameDescription: {
    color: 'white',
    textAlign: 'center'
  },
  gameGenre: {
    color: "white",
    borderRadius: 10,
    textAlign: 'center',
    flexDirection: 'row',
    margin: 8,
    padding: 8,
  },
  platformContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 4,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  platformText: {
    color: 'white',
    fontSize: 12,
  },
  platformIconContainer: {
    position: 'absolute',
    bottom: 53,
    left: -125,
    width: 24,
    height: 24,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
},
platformIcon: {
    bottom: 53,
    left: -125,
    width: 24,
    height: 24,
    tintColor: 'white',
},
  gameDate: {
    color: 'white',
  },
  releaseDesContainer: {
    marginTop: 5,
    marginLeft: 1,
  },
  releaseDateContainer: {
    marginTop: 15,
    marginLeft: 1,
  },
  screenshot: {
    width: 300,
    height: 300,
    marginRight: 10,
    borderRadius: 5,
  },

  closeButton: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#EEE',
  },
  closeButtonIcon: {
    fontSize: 20,
  },
});

export default gameItemStyles;
