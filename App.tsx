import 'react-native-gesture-handler';
import React from 'react'

import { Provider as PaperProvider } from 'react-native-paper';

import { WithSplashScreen } from './src/components';
import { AuthProvider } from './src/context/AuthContext';
import { WebProvider } from './src/context/WebContext';

import Navigator from './src/navigators/Navigator';

export const App = () => {
  return (      
    <AppState>
      <Navigator /> 
    </AppState>
  )
}

// Colocar los diferentes context aqui
const AppState = ({children}:any) => {

  return (   
    <AuthProvider>
      <PaperProvider>
        <WithSplashScreen>
          <WebProvider>
            {children}  
          </WebProvider>
        </WithSplashScreen>
      </PaperProvider>
    </AuthProvider>
  )
}

export default App;
