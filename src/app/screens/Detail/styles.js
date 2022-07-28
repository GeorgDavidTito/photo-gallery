import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  backContainer:{
    position:'absolute',
    left:25,
    top:40,
    width:25,
    height:35,
  },
  backImage: {
    flex:1,
    resizeMode:'contain'
  },
  imageBackground:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  descriptionContainer:{
    paddingLeft:20,
    paddingRight:32,
    paddingBottom:32,
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
  userAvatar: {
    width:40,
    height:40,
    borderRadius: 40/2,
    marginRight: 16
  },
  userContainer:{
    flexDirection:'row',
  },
  userName: {
    fontSize:14,
    lineHeight:20,
    color:'#FFFFFF',
    fontFamily:'sans-serif'
  },
  viewProfile: {
    fontSize:12,
    lineHeight:14,
    color:'#FFFFFF',
    fontFamily:'sans-serif'
  }
});
