import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  titleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignment: 'fill',
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
});
