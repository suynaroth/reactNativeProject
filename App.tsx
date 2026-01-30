import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Modal, Button } from 'react-native';
import Navigation from './src/navigation/MainStackNavigation';

export default function App() {
  return (
    <Navigation/>
  );
}

