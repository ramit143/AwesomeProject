import { useState,useEffect } from "react";
import React from 'react'
import {View} from 'react-native'
import { Text } from "react-native-svg";



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
      .then((response) => response.json())
      .then((json) => setData(response))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {data.map((item) => (
        item.subresponse.map((subItem) => (
          <option key={subItem.id} value={subItem.teltitle}>{subItem.teltitle}</option>
        ))
      ))}
    </View>
  );
};

export default App;
