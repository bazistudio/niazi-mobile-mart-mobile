import React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';
import { theme } from '../../design/theme';

interface ScreenProps extends ViewProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
