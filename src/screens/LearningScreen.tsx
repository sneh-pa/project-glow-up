import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import courses from '@/data/courses.json';

export default function LearningScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Learning Hub</Text>
      {courses.map((c, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.h2}>{c.title}</Text>
          <Text style={styles.text}>{c.platform} • {c.cost}</Text>
        </View>
      ))}
      <View style={styles.card}>
        <Text style={styles.h2}>Communication & Confidence</Text>
        <Text style={styles.text}>• Practice concise updates and ask clarifying questions.</Text>
        <Text style={styles.text}>• Use the Journal tab to reflect quickly after conversations.</Text>
        <Text style={styles.text}>• Track 1 small risk you took this week (speaking up, asking, proposing).</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  h1: { fontSize: 24, fontWeight: '700' },
  h2: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  text: { fontSize: 15, marginBottom: 4 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, elevation: 2 }
});
