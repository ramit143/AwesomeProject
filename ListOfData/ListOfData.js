


// // // // //{ "news_id":"123086973",
// // // // // "news_midthumb_image":"eeimages\/featureimages\/365X255\/123086973-365X255.jpg",
// // // // // "news_thumb_image":"eeimages\/featureimages\/100X100\/123086973-100X100.jpg","news_slider_image":"eeimages\/featureimages\/680X310\/123086973-680X310.jpg","publish_createdon":"2023-05-15 06:15:46",
// // // // // "news_title_telugu":"Crime News: యువతులతో నగ్నంగా క్షుద్ర పూజలు",
// // // // // "news_title_english":"general",
// // // // // "news_count":72922,
// // // // // "news_url":"https:\/\/www.eenadu.net\/telugu-news\/crime\/general\/0300\/123086973","news_url_light":"https:\/\/www.eenadu.net\/mobileapp\/articleview\/123086973","news_url_dark":"https:\/\/www.eenadu.net\/mobileapp\/articleview\/123086973\/dark","news_videotype":"0",
// // // // // "news_short_description":"యువతులతో క్షుద్ర పూజలు చేసిన ముఠాను నల్లపాడు పోలీసులు అరెస్టు చేశారు. అరెస్టు అయిన వారిలో పూజారి నాగేశ్వరరావు, నాగేంద్రబాబు (పొన్నెకల్లు), అరవింద, రాధా (చిలకలూరిపేట), సురేష్‌ (గుంటూరు), భాస్కర్‌, పెద్దిరెడ్డి, సాగర్‌, శివ, సునీల్‌, పవన్‌, సుబ్బులు (నంద్యాల జిల్లా) ఉన్నారు."
// // // // // }

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { NewsDetailsScreen } from '../NewsDetailScreen/newsDetailsScreen';
import { Header } from '../Header/Header';
import Footer from '../Footer/footer';





export const ListOfData = ( {navigation}) => {
  const [data, setData] = useState([]); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the Eenadu API endpoint
    fetch('https://assets.eenadu.net/home_json/mostreadnews.json')
      .then((response) => response.json())
      .then((json) => setData(json)); // Update the data state with the fetched JSON data
  }, []);

  
  const handleItemClick = (item) => {
    console.log("Item details:", item);
    // Perform any desired operations with the item details
    navigation.navigate("NewsDetails", { item});
  };


  const renderItem = ({ item }) => {
    const image = item.news_midthumb_image.substring(8); // Extract the image path from the data
    const Imageurl = "https://assets.eenadu.net" + image; // Construct the full image URL

    return (
      <TouchableOpacity key={item.news_id} style={styles.itemContainer} onPress={() => handleItemClick(item)}>
        <Image
          source={{ uri: Imageurl }}
          style={styles.image}
        />
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item.news_title_telugu}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.news_id}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    width: 350,
    height: 90,
    flexDirection: "row",
  },
  image: {
    width: 140,
    height: 80,
    borderRadius: 10,
    margin: 5,
  },
  itemContent: {
    borderWidth: 0,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",
    borderWidth: 0,
    textAlign: 'center',
    flexWrap: "wrap",
    width: 180,
    height: 80,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

