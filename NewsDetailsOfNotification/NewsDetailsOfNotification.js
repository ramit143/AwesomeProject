import React from 'react';
import WebView from 'react-native-webview';

export const NewsDetailsOfNotification = ({ route }) => {

    const { item } = route.params;

    return (
        <>

          

            <WebView
                source={{ uri: item.news_url_light }}
            />

        </>


    )
};
