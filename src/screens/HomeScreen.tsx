import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quotes from '@/data/quotes.json';
import affirmations from '@/data/affirmations.json';
import celebrations from '@/data/celebrations.json';
import { format } from 'date-fns';

function pickByDay(list: any[]) {
  const start = new Date('2025-01-01T00:00:00Z').getTime();
  const today = new Date();
  const diff = Math.floor((today.getTime() - start) / (1000*60*60*24));
  return list[diff % list.length];
}

export default function HomeScreen() {
  const [today, setToday] = useState<any>(null);

  const computeToday = () => ({
    updatedAt: new Date().toISOString(),
    quote: pickByDay(quotes),
    affirmation: pickByDay(affirmations),
    celebration: pickByDay(celebrations)
  });

  useEffect(() => {
    const payload = computeToday();
    setToday(payload);
    AsyncStorage.setItem('daily', JSON.stringify(payload));
    const id = setInterval(() => {
      const p = computeToday();
      setToday(p);
      AsyncStorage.setItem('daily', JSON.stringify(p));
    }, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!today) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Welcome back 👋</Text>
      <Text style={styles.h2}>{format(new Date(), 'EEEE, MMM d')}</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Power Line</Text>
        <Text style={styles.text}>{today.quote.text}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Affirmation</Text>
        <Text style={styles.text}>{today.affirmation.text}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Mini Celebration</Text>
        <Text style={styles.text}>{today.celebration.text}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  h1: { fontSize: 28, fontWeight: '700' },
  h2: { fontSize: 18, color: '#555' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, elevation: 2 },
  label: { fontSize: 14, color: '#666', marginBottom: 8 },
  text: { fontSize: 16, lineHeight: 22 }
});
