import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProducoesScreen() {
  const producoes = [
    {
      titulo: 'SIGE - Sistema de Gestão Escolar',
      tipo: 'Projeto Full Stack',
      evento: 'Python / HTML / CSS / JS',
      ano: '2024',
      autores: 'José Guilherme'
    },
    {
      titulo: 'Biblioteca Pessoal (API Mobile)',
      tipo: 'Projeto Full Stack',
      evento: 'Django + React',
      ano: '2024',
      autores: 'José Guilherme'
    },
    {
      titulo: 'Repositório Java',
      tipo: 'Estudos / Fundamentos à POO',
      evento: 'Java',
      ano: '2024',
      autores: 'José Guilherme'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {producoes.length > 0 ? producoes.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.titulo}>{item.titulo}</Text>
          <Text style={styles.autores}>{item.autores}</Text>
          <Text style={styles.evento}>{item.evento}</Text>
          <View style={styles.footer}>
            <Text style={styles.tipo}>{item.tipo}</Text>
            <Text style={styles.ano}>{item.ano}</Text>
          </View>
        </View>
      )) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma produção acadêmica cadastrada ainda.</Text>
        </View>
      )}
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
    borderLeftColor: '#E53E3E',
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
  autores: {
    fontSize: 14,
    color: '#4A5568',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  evento: {
    fontSize: 14,
    color: '#2B6CB0',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 10,
  },
  tipo: {
    fontSize: 13,
    color: '#718096',
  },
  ano: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#718096',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#A0AEC0',
    textAlign: 'center',
  }
});
