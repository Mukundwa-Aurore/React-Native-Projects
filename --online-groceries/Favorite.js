import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const FavouriteScreen = () => {

  const favouriteItems = [
    {
      id: '1',
      name: 'Sprite Can',
      price: '$1.50',
      description: '325ml, Price',
      image: require('./assets/sprite.png'),
    },
    {
      id: '2',
      name: 'Diet Coke',
      price: '$1.99',
      description: '355ml, Price',
      image: require('./assets/dietcoke.png'),
    },
    {
      id: '3',
      name: 'Apple & Grape Juice',
      price: '$15.50',
      description: '2L, Price',
      image: require('./assets/juce.png'),
    },
    {
      id: '4',
      name: 'Coca Cola Can',
      price: '$4.99',
      description: '325ml, Price',
      image: require('./assets/cocacola.png'),
    },
    {
      id: '5',
      name: 'Pepsi Can',
      price: '$4.99',
      description: '330ml, Price',
      image: require('./assets/pepsi.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favourite</Text>

      <FlatList
        data={favouriteItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add All To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flatList: {
    flexGrow: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FavouriteScreen;
