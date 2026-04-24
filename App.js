import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import FormacaoScreen from './src/screens/FormacaoScreen';
import CursosScreen from './src/screens/CursosScreen';
import ProducoesScreen from './src/screens/ProducoesScreen';
import ConhecimentosScreen from './src/screens/ConhecimentosScreen';
import LinksScreen from './src/screens/LinksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1A365D' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Lattes de Bolso' }} 
        />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Meu Perfil' }} />
        <Stack.Screen name="Formacao" component={FormacaoScreen} options={{ title: 'Formação Acadêmica' }} />
        <Stack.Screen name="Cursos" component={CursosScreen} options={{ title: 'Cursos Complementares' }} />
        <Stack.Screen name="Producoes" component={ProducoesScreen} options={{ title: 'Produções Acadêmicas' }} />
        <Stack.Screen name="Conhecimentos" component={ConhecimentosScreen} options={{ title: 'Conhecimentos' }} />
        <Stack.Screen name="Links" component={LinksScreen} options={{ title: 'Links Importantes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
