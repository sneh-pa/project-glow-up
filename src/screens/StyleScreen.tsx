import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function StyleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Style Guide</Text>
      <View style={styles.card}>
        <Text style={styles.h2}>Pear-Shaped Tips</Text>
        <Text style={styles.text}>• Emphasize shoulders and waist (structured tops, V-necks).</Text>
        <Text style={styles.text}>• Choose A-line, straight, or wide-leg trousers.</Text>
        <Text style={styles.text}>• Mid/high-rise bottoms with minimal pocket bulk.</Text>
        <Text style={styles.text}>• Fabrics with gentle drape; avoid clingy sheers on the lower body.</Text>
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
