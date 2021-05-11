import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { store } from './src/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
      </Provider>

    </NavigationContainer>
  );
}

export default App;

