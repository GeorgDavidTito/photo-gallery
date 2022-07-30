import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignment: 'fill',
    width: '100%',
    marginTop: 20,
  },
  imageContainer: {
    position: 'absolute',
    left: 20,
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
