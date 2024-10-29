// ExplorePage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const ExplorePage = () => {
  const categories = [
    { id: '1', name: 'Fresh Fruits & Vegetable', image: require('./assets/fruits.png'),backgroundColor:'green' },
    { id: '2', name: 'Cooking Oil & Ghee', image: require('./assets/dairy.png') },
    { id: '3', name: 'Meat & Fish', image: require('./assets/meat.png') },
    { id: '4', name: 'Bakery & Snacks', image: require('./assets/berries.png') },
    { id: '5', name: 'Dairy & Eggs', image: require('./assets/dairy.png') },
    { id: '6', name: 'Beverages', image: require('./assets/beverages.png') },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="gray"
        />
      </View>
      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExplorePage;
