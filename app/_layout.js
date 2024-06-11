import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/ThemeContext";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{}} />
      </Stack>
    </ThemeProvider>
  );
};

export default MainLayout;
