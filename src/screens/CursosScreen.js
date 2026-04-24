import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CursosScreen() {
  const cursos = [
    {
      titulo: 'Python Essentials 1 & 2',
      instituicao: 'CISCO Networking Academy',
      cargaHoraria: '80h',
      ano: '2024'
    },
    {
      titulo: 'Java para Iniciantes',
      instituicao: 'Curso em Vídeo',
      cargaHoraria: '32h',
      ano: '2024'
    },
    {
      titulo: 'MySQL do Zero',
      instituicao: 'Curso em Vídeo',
      cargaHoraria: '25h',
      ano: '2024'
    },
    {
      titulo: 'HTML & CSS na Prática',
      instituicao: 'DIO',
      cargaHoraria: '20h',
      ano: '2023'
    },
    {
      titulo: 'Git & GitHub Essentials',
      instituicao: 'GitHub / Microsoft Learn',
      cargaHoraria: '15h',
      ano: '2023'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {cursos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.instituicao}>{item.instituicao}</Text>
          <View style={styles.footer}>
            <Text style={styles.info}>Carga Horária: {item.cargaHoraria}</Text>
            <Text style={styles.info}>Ano: {item.ano}</Text>
          </View>
        </View>
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
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#D69E2E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 5,
  },
  instituicao: {
    fontSize: 15,
    color: '#4A5568',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 10,
  },
  info: {
    fontSize: 13,
    color: '#718096',
  }
});
