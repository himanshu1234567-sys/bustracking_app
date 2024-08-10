// src/screens/BusDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import { useRoute } from '@react-navigation/native';

const BusDetailScreen = () => {
  const route = useRoute();
  const { bus } = route.params;

  // Animation setup
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

  React.useEffect(() => {
    // Animation effect
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={bus.busImage} style={styles.image} />
      <Text style={styles.title}>{bus.busName}</Text>
      <Text style={styles.text}>{`Bus Number: ${bus.busNum}`}</Text>
      <Text style={styles.text}>{`Owner: ${bus.ownerName}`}</Text>
      <Text style={styles.text}>{`Destination: ${bus.destination}`}</Text>
      <Text style={styles.text}>{`Pick-up Point: ${bus.pickPoint}`}</Text>
      <Text style={styles.text}>{`Drop-off Point: ${bus.dropPoint}`}</Text>
      <Text style={styles.text}>{`Pick-up Time: ${bus.picktime}`}</Text>
      <Text style={styles.text}>{`Drop-off Time: ${bus.droptime}`}</Text>
      <Text style={{color:'red'}}>{`Ticket Price: ₹${bus.ticket}`}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // White background for the screen
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
    resizeMode: 'cover', // Ensure the image covers the area properly
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'red',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000', 
  },
});

export default BusDetailScreen;
