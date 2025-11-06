import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import DashboardScreen from './Dashboardscreen';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <DashboardScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}
