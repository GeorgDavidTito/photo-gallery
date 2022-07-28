import { StyleSheet, Dimensions } from 'react-native';
let { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    height: (width/2)+30,
    width: (width/2) - 50,
    marginHorizontal:10,
  },
  photoContainer: {
    flex:1,
    height: (width/2),
    justifyContent:'center',
  },
  image: {
    display:'flex',
    flex:1,
    resizeMode: 'contain',
    justifyContent:'flex-end'
  },
  descriptionContainer: {
    height:100,
    borderBottomEndRadius:12,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent:'flex-end',
    display:'flex',
    paddingHorizontal:16
  },
  descriptionTitle:{
    padding:4,
    fontSize:14,
    lineHeight:12,
    color:'#FFFFFF',
    fontFamily:'sans-serif'
  },
  likes:{
    padding:4,
    fontSize:12,
    lineHeight:10,
    color:'#FFFFFF',
    fontFamily:'sans-serif'
  },
});