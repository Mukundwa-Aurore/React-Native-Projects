import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const data = [
  {
    title: 'Pavuro',
    weight: '7pcs, Priceg',
    price: '$5.9 - $4.99',
    image: require('./assets/pavuro.png'), 
 
  },
  {
    title: 'Carrots',
    weight: '1kg, Priceg',
  price: ' $5.9 - $4.99',
    image: require('./assets/karoti.png'), 

  },
    {
    title: 'Sereri',
    weight: '1kg, Priceg',
 price: '$1.9 - $0.56',
    image: require('./assets/sereri.png'), 
  },
    {
    title: 'Straw Berries',
    weight: '1kg, Priceg',
 price: ' $7.9 - $4.99',
    image: require('./assets/tungurusumu.png'), 
  },

   {
    title: 'Garlic',
    weight: '1kg, Priceg',
 price: ' $3.9 - $2.99',
    image: require('./assets/apple.png'), 
  },

];

const NewProducts = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Best Selling</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

  
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productWeight}>{item.weight}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.productPrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>New</Text>
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: 'green',
  },
  card: {
   borderColor:'#c4cfc7',
   borderWidth:1,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: 150, 
    marginRight: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productWeight: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },

 
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default NewProducts ;
