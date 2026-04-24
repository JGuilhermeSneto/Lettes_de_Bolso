import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ConhecimentosScreen() {
  const conhecimentos = [
    { categoria: 'Linguagens', itens: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'SQL'] },
    { categoria: 'Frameworks & Libs', itens: ['Django', 'React', 'Node.js'] },
    { categoria: 'Banco de Dados', itens: ['MySQL'] },
    { categoria: 'Ferramentas', itens: ['Git', 'GitHub'] }
  ];

  return (
    <ScrollView style={styles.container}>
      {conhecimentos.map((grupo, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.categoria}>{grupo.categoria}</Text>
          <View style={styles.tagsContainer}>
            {grupo.itens.map((item, idx) => (
              <View key={idx} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoria: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A365D',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#EBF8FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#BEE3F8',
  },
  tagText: {
    color: '#2B6CB0',
    fontSize: 14,
    fontWeight: '500',
  }
});
