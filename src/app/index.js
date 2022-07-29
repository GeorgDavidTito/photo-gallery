import * as React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Screens from './screens';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={navTheme}>
          <Screens />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
