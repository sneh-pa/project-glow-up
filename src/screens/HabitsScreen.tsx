import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

const morningHabits = [
  "Ajwain, fennel, methi, cumin water",
  "5-minute breath practice",
  "Hydration check",
  "Gentle stretch"
];

export default function HabitsScreen() {
  const schedule = async () => {
    await Notifications.scheduleNotificationAsync({
      content: { title: 'Gentle Reminder', body: 'Time for your morning practice 💧' },
      trigger: { hour: 8, minute: 0, repeats: true }
    });
    alert('Daily 8:00 AM reminder scheduled.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>Wellness & Habits</Text>
      <View style={styles.card}>
        <Text style={styles.h2}>Morning Routine</Text>
        {morningHabits.map((h, i) => <Text key={i} style={styles.text}>• {h}</Text>)}
        <Button title="Schedule 8:00 AM Reminder" onPress={schedule} />
      </View>
      <View style={styles.card}>
        <Text style={styles.h2}>Confidence Boost</Text>
        <Text style={styles.text}>• Daily affirmation in Home tab</Text>
        <Text style={styles.text}>• Celebrate small wins</Text>
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
