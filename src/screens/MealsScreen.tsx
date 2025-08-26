import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import plans from '@/data/mealPlans.json';

export default function MealsScreen() {
  const [weekIndex, setWeekIndex] = useState(0);
  const week: any = plans[weekIndex];
  const days = Object.keys(week.adult);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Week {week.week} Meals</Text>
      <Text style={styles.tip}>Husband: avoid oats | You: paneer preferred | Baby: finger foods</Text>
      {days.map((d: any) => (
        <View key={d} style={styles.card}>
          <Text style={styles.h2} >{d.charAt(0).toUpperCase() + d.slice(1)}</Text>
          <Text style={styles.text}>Breakfast: {week.adult[d].breakfast}</Text>
          <Text style={styles.text}>Lunch: {week.adult[d].lunch}</Text>
          <Text style={styles.text}>Dinner: {week.adult[d].dinner}</Text>
          <Text style={styles.text}>Snacks: {week.adult[d].snacks}</Text>
          <Text style={styles.h3}>Baby finger foods</Text>
          <Text style={styles.text}>• {week.baby_finger_foods[d].join(', ')}</Text>
        </View>
      ))}
      <View style={styles.row}>
        <Button title="Prev Week" onPress={() => setWeekIndex(Math.max(0, weekIndex-1))} />
        <Button title="Next Week" onPress={() => setWeekIndex(Math.min(plans.length-1, weekIndex+1))} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  h1: { fontSize: 24, fontWeight: '700' },
  h2: { fontSize: 18, fontWeight: '600', marginBottom: 6, textTransform: 'capitalize' },
  h3: { fontSize: 16, fontWeight: '600', marginTop: 8 },
  text: { fontSize: 15, marginBottom: 4 },
  tip: { fontSize: 13, fontStyle: 'italic', color: '#444', marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, elevation: 2 }
});
