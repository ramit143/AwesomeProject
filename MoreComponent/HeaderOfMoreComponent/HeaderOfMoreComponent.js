import React from 'react';
import { View, Text , StyleSheet} from 'react-native';

const HeaderOfMoreComponent = () => {
  return (
    <View>
        <Text style={styles.container}>మరిన్ని</Text>
    </View>
  )
}

export default HeaderOfMoreComponent



const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        width: 340,
       textAlign:'center',
       marginBottom : 20,
       padding:15,
       borderRadius:20,
       borderTopColor:'white',
       fontSize:18,
       color:'blue'
       
      
       
    }
})