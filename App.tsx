import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import WorkoutsScreen from '@/screens/WorkoutsScreen';
import MealsScreen from '@/screens/MealsScreen';
import JournalScreen from '@/screens/JournalScreen';
import HabitsScreen from '@/screens/HabitsScreen';
import LearningScreen from '@/screens/LearningScreen';
import StyleScreen from '@/screens/StyleScreen';
import * as Notifications from 'expo-notifications';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
    Notifications.scheduleNotificationAsync({
      content: { title: 'Gentle Reminder', body: 'Time for your morning practice 💧' },
      trigger: { hour: 8, minute: 0, repeats: true }
    });
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutsScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Habits" component={HabitsScreen} />
        <Tab.Screen name="Learning" component={LearningScreen} />
        <Tab.Screen name="Style" component={StyleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
