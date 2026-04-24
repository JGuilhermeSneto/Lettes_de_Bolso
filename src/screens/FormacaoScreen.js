import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FormacaoScreen() {
  const formacoes = [
    {
      nivel: 'Tecnologia em Sistemas para Internet (TSI)',
      instituicao: 'IFRN – Canguaretama',
      periodo: '5° Período',
      status: 'Em andamento'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      {formacoes.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.nivel}>{item.nivel}</Text>
          <Text style={styles.instituicao}>{item.instituicao}</Text>
          <View style={styles.footer}>
            <Text style={styles.periodo}>{item.periodo}</Text>
            <Text style={styles.status}>{item.status}</Text>
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
    borderLeftColor: '#3182CE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  nivel: {
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
  periodo: {
    fontSize: 13,
    color: '#718096',
  },
  status: {
    fontSize: 13,
    color: '#38A169',
    fontWeight: '600',
  }
});
