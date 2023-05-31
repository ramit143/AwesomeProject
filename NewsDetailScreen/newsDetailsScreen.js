import React from 'react';
import WebView from 'react-native-webview';
import { HeaderOfNewsDetails } from '../HeaderOfNewsDetails/HeaderOfNewsDetails';

export const NewsDetailsScreen = ({ route }) => {

    const { item } = route.params;

    return (
        <>

            <HeaderOfNewsDetails />

            <WebView
                source={{ uri: item.news_url_light }}
            />

        </>


    )
};
