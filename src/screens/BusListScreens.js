// src/screens/BusListScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBuses } from '../features/busSlice';
import { useNavigation } from '@react-navigation/native';

const BusListScreen = () => {
  const buses = useSelector(selectBuses);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Bus Detail', { bus: item })}
      activeOpacity={0.8}
    >
      <Image source={item.busImage} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.busName}>{item.busName}</Text>
        <Text style={styles.busDetails}>{item.busNum}</Text>
        <Text style={styles.busDetails}>{item.destination}</Text>
        <Text style={styles.ticket}>{`₹${item.ticket}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buses}
        renderItem={renderItem}
        keyExtractor={(item) => item.busNum}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  busName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  busDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  ticket: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
});

export default BusListScreen;
