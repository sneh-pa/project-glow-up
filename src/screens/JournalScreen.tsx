import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JournalScreen() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  const saveEntry = async () => {
    const all = [entry, ...entries].filter(Boolean);
    setEntries(all);
    setEntry('');
    await AsyncStorage.setItem('one-new-thing', JSON.stringify(all));
  };

  useEffect(() => {
    (async () => {
      const cached = await AsyncStorage.getItem('one-new-thing');
      if (cached) setEntries(JSON.parse(cached));
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>One New Thing a Day</Text>
      <TextInput
        style={styles.input}
        placeholder="What did you try today?"
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Save" onPress={saveEntry} />
      {entries.map((e, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.text}>{e}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 14 },
  h1: { fontSize: 24, fontWeight: '700' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 12, padding: 12, marginBottom: 8 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 16, elevation: 2 },
  text: { fontSize: 15 }
});
