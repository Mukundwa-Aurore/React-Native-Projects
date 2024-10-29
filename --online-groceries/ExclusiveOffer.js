import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const ExclusiveOffer = ({ data = [], cartItems, setCartItems }) => {
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exclusive Offer</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item?.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item?.title}</Text>
            <Text style={styles.productWeight}>{item?.weight}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.productPrice}>{item?.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddToCart(item)}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
       marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    marginTop:10,
    marginBottom:10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'green',
    fontSize: 14,
  },
  card: {
   borderColor:'#c4cfc7',
   borderWidth:1,
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
    width: 150,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  productWeight: {
    color: 'gray',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 7,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ExclusiveOffer;
