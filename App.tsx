import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/Navigation/Navigator';
// import FadeScreen from './src/screen/FadeScreen';
import {ProviderGradient} from './src/context/GradientContext';
LogBox.ignoreLogs([]);

const AppState = ({children}: any) => {
  return <ProviderGradient>{children}</ProviderGradient>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
