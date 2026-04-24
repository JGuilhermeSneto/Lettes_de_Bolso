import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function LinksScreen() {
  const links = [
    { titulo: 'GitHub', url: 'https://github.com/JGuilhermeSneto', icon: '💻' },
    { titulo: 'LinkedIn', url: 'https://www.linkedin.com/in/josé-guilherme-5328a6290', icon: '💼' },
    { titulo: 'Portfólio Pessoal', url: 'https://jguilhermesneto.github.io/', icon: '🌐' },
    { titulo: 'Instagram', url: 'https://www.instagram.com/o_jguilherme/', icon: '📸' },
    { titulo: 'E-mail', url: 'mailto:jguilhermesneto.dev@gmail.com', icon: '✉️' }
  ];

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Toque nos links para abrir no navegador:</Text>
      {links.map((link, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.linkCard}
          onPress={() => handlePress(link.url)}
        >
          <Text style={styles.icon}>{link.icon}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>{link.titulo}</Text>
            <Text style={styles.url}>{link.url}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  url: {
    fontSize: 14,
    color: '#3182CE',
  }
});
