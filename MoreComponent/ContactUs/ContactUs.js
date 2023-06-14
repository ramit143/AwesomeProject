import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ContactUs() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>కాంటాక్ట్ అస్ </Text>
        <Text>కాంటాక్ట్ అస్ </Text>
        <Text>కాంటాక్ట్ అస్ </Text>
      </View>

    </View>
  )
}

export default ContactUs


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 20
  },
})