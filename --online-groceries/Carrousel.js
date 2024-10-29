import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [

   {
    id: '1',
    title: 'Organic Fruits',
  subtitle: 'Get Up To 20% OFF',
      image: require('./assets/fruits.png'),
         backgroundColor:'#28eb83',
  },
  {
    id: '2',
    title: 'Fresh Vegetables',
    subtitle: 'Get Up To 40% OFF',
    image: require('./assets/imboga.png'),
    backgroundColor:'#e090db',
  },
 
    {
    id: '3',
    title: 'Rich to Proteins',
   subtitle: 'Get Up To 30% OFF',
   image: require('./assets/inkoko.png'),

  },

];

const BannerCarousel = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.bannerContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.bannerImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
          <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={width * 0.9} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bannerContainer: {
    backgroundColor: '#d6d0d0',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    marginHorizontal: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    fontSize: 16,
    color: 'green',
  },
});

export default BannerCarousel;
