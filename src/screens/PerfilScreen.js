import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.text}>
          Olá! Sou José Guilherme, dev web no IFRN – Canguaretama, cursando TSI no 5° período. 
          Stack completo — Python, Java, Django, JavaScript, React, HTML/CSS e Node.js. 
          Sempre construindo no GitHub e aperfeiçoando código a cada nova solução.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        <Text style={styles.text}><Text style={styles.bold}>Nome:</Text> José Guilherme da S. Neto</Text>
        <Text style={styles.text}><Text style={styles.bold}>Email:</Text> jguilhermesneto.dev@gmail.com</Text>
        <Text style={styles.text}><Text style={styles.bold}>Nacionalidade:</Text> Brasileiro</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A365D',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 24,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2D3748',
  }
});
