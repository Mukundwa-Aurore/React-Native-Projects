import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import BannerCarousel from './Carrousel';
import ProductCards from './ExclusiveOffer';
import NewProducts from './BestSelling';
import LoginPage from './LoginPage';
import FavouriteScreen from './Favorite';
import CartPage from './CartPage';
import ExplorePage from './ExplorePage';

const LandingPage = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Shop');
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Product data should be declared here
  const productData = [
    { id: '1', title: 'Bananas', price: '$1.99', image: require('./assets/banana.png') },
    { id: '2', title: 'Apples', price: '$2.99', image: require('./assets/apple.png') },
    { id: '3', title: 'Avocado', price: '$2.99', image: require('./assets/avocado.png') },
    { id: '4', title: 'Berries', price: '$2.99', image: require('./assets/berries.png') },
    { id: '5', title: 'Tungurusumu', price: '$2.99', image: require('./assets/tungurusumu.png') },
  ];

  const icons = {
    shop: require('./assets/shop.png'),
    explore: require('./assets/explore.png'),
    cart: require('./assets/cart.png'),
    favourite: require('./assets/favorite.png'),
    account: require('./assets/user.png'),
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Shop':
        return (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search Store"
                placeholderTextColor="gray"
                value={searchQuery}
                onChangeText={handleSearch}
              />
            </View>
            <ScrollView style={styles.scrollView}>
              <View>
                <BannerCarousel />
              </View>
              <View>
                <ProductCards data={productData} cartItems={cartItems} setCartItems={setCartItems} />
              </View>
              <View style={{ marginTop: 30 }}>
                <NewProducts />
              </View>
            </ScrollView>
          </>
        );
      case 'Explore':
        return <ExplorePage />;
      case 'Favourite':
        return <FavouriteScreen />;
      case 'Cart':
        return <CartPage cartItems={cartItems} setCartItems={setCartItems} />;
      default:
        return <Text style={styles.centerText}>{activeTab} Screen</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/carrots.png')} style={styles.MainIcon} />
      <View style={styles.locationContainer}>
        <Image source={require('./assets/location.png')} style={styles.carrotIcon} />
        <Text style={styles.locationText}>Rwanda, Kigali.</Text>
      </View>

      {renderContent()}

      <View style={styles.tabBar}>
        {['Shop', 'Explore', 'Cart', 'Favourite', 'Account'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tabItem}
            onPress={() => {
              if (tab === 'Account') {
                setIsLoginVisible(true);
              } else {
                setActiveTab(tab);
              }
            }}
          >
            <Image
              source={icons[tab.toLowerCase()]}
              style={[styles.tabIcon, activeTab === tab && styles.activeTabIcon]}
            />
            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {isLoginVisible && (
        <View style={styles.loginOverlay}>
          <LoginPage onClose={() => setIsLoginVisible(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  carrotIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  MainIcon: {
    width: 30,
    marginLeft: 150,
    marginTop: 15,
    marginBottom: 10,
    height: 24,
    marginRight: 10,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderRadius: 20,
    backgroundColor: 'green',
    paddingVertical: 15,
    marginBottom: 4,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  tabText: {
    fontSize: 11,
    color: 'black',
  },
  activeTabIcon: {
    width: 30,
    height: 30,
    marginBottom: 0,
  },
  activeTabText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  loginOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
       justifyContent: 'center',
    padding: 30,
    alignItems: 'center',
  },
});

export default LandingPage;
