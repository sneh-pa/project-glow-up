import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import workouts from '@/data/workouts.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WorkoutsScreen() {
  const [weekIndex, setWeekIndex] = useState(0);
  const week: any = workouts[weekIndex];

  const saveComplete = async (day: string) => {
    const key = `wk${week.week}-${day}-done`;
    await AsyncStorage.setItem(key, JSON.stringify({ done: true, at: new Date().toISOString() }));
    alert(`Marked ${day} complete! 🎉`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Week {week.week} Plan</Text>
      <Text style={styles.tip}>{week.note}</Text>
      {week.days.map((d: any) => (
        <View key={d.day} style={styles.card}>
          <Text style={styles.h2}>{d.day} — {d.type}</Text>
          {d.exercises && d.exercises.map((ex: any, i: number) => (
            <Text key={i} style={styles.text}>• {ex.name} — {ex.sets} ({ex.tips || 'Form first'})</Text>
          ))}
          {d.notes && <Text style={styles.text}>{d.notes}</Text>}
          {d.customization && <Text style={styles.tip}>Customization: {d.customization}</Text>}
          <Button title="Mark Complete" onPress={() => saveComplete(d.day)} />
        </View>
      ))}
      <View style={styles.row}>
        <Button title="Prev Week" onPress={() => setWeekIndex(Math.max(0, weekIndex-1))} />
        <Button title="Next Week" onPress={() => setWeekIndex(Math.min(workouts.length-1, weekIndex+1))} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  h1: { fontSize: 24, fontWeight: '700' },
  h2: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  text: { fontSize: 15, marginBottom: 4 },
  tip: { fontSize: 13, fontStyle: 'italic', color: '#444', marginTop: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, elevation: 2 }
});
