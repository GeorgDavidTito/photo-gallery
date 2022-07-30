import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';
import Home from './Home';
import Detail from './Detail';
import Profile from './Profile';
import union from '../../assets/union.png';

const Drawer = createDrawerNavigator();

const Title = props => {
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => props.navigation.toggleDrawer()}>
        <Image style={styles.image} source={union} />
      </TouchableOpacity>
      <Text style={styles.titleText}>Discover</Text>
    </View>
  );
};

const renderHeader = props => {
  let navegState = props.navigation.getState()?.routes[0]?.state;
  return !navegState || navegState?.routeNames[navegState.index] === 'Home' ? (
    <Title {...props} />
  ) : null;
};

const Stack = createNativeStackNavigator();

const ScreensStack = ({ route, navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ navigation, route }) => ({
          headerShown: false,
          cardStyleInterpolator: route.params?.withAnimation
            ? CardStyleInterpolators.forHorizontalIOS
            : CardStyleInterpolators.forNoAnimation,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Screens = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: { backgroundColor: 'white' },
        activeTintColor: 'rgba(0,0,0,1)',
        inactiveTintColor: 'rgba(0,0,0,0)',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'rgba(0,0,0,1)',
        header: renderHeader,
      }}>
      <Drawer.Screen
        name="HomeScreen"
        component={ScreensStack}
        options={{
          drawerLabel: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Screens;
