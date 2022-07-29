import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  imageBackground:{
    flex: 1,
    justifyContent: 'flex-end',
    width:width,
    height: height
  },
  descriptionContainer:{
    paddingHorizontal:24,
    marginBottom:40,
  },
  descriptionTitle:{
    fontSize:42,
    lineHeight:49,
    color:'#FFFFFF',
    fontFamily:'sans-serif'
  },
  likes:{
    fontSize:14,
    lineHeight:16,
    color:'#FFFFFF',
    marginVertical:12,
    fontFamily:'sans-serif'
  },
});
