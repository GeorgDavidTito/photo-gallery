import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  viewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
  },
  description: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    fontFamily: 'sans-serif',
  },
});
