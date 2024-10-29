// CartPage.js

import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, Image } from 'react-native';

const CartPage = ({ navigation, cartItems, setCartItems }) => {
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatList}
      />
      <View>
        <Button title="Order" onPress={() => navigation.navigate('Congratulation')} />
      </View>
      <Text style={styles.totalText}>
        Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#777',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FF677D',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});

export default CartPage;
