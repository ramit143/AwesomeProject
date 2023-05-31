import React from 'react';
import WebView from 'react-native-webview';

const Webview = () => {
  return (
  <WebView 
    source={{uri:"https://www.npmjs.com/search?q=pod%20react%20native"}}
  />
  )
}

export default Webview;