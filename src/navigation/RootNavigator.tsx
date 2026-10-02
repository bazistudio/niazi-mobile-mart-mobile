import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../auth/authStore';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../design/theme';

const Stack = createNativeStackNavigator();

const LoginPlaceholder = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login Screen</Text>
    <Text style={styles.subtitle}>Placeholder for Auth</Text>
  </View>
);

const DashboardPlaceholder = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Dashboard Screen</Text>
    <Text style={styles.subtitle}>Authenticated App Area</Text>
  </View>
);

export const RootNavigator = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={LoginPlaceholder} />
        ) : (
          <Stack.Screen name="App" component={DashboardPlaceholder} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    color: theme.colors.textPrimary,
  },
  subtitle: {
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
});
