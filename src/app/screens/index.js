import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Home from './Home';
import Detail from './Detail';
import Profile from './Profile';
import union from '../../assets/union.png'

const Title = (props)=> (
  <View  style={styles.titleContainer}>
     <TouchableOpacity style={styles.imageContainer} >
    <Image 
    style={styles.image}
    source={union}
    />
    </TouchableOpacity>
    <Text
      style={styles.titleText}>
        Discover
    </Text>
  </View>
);

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerTitle: props => <Title {...props} />
        }}
      />
       <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation, route }) => ({
          headerShown:false,
          cardStyleInterpolator: route.params?.withAnimation
              ? CardStyleInterpolators.forHorizontalIOS
              : CardStyleInterpolators.forNoAnimation,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
