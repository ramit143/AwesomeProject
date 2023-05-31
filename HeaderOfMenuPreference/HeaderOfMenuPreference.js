import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const HeaderOfMenuPreferenceComponent = ({ name, addBookmark }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>మెనూ ప్రిఫరెన్స్</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingRight: 5,
        paddingStart: 20,
        alignItems: 'center',
        backgroundColor: 'lightgray',
        shadowRadius: 5,
        borderRadius: 20,
        paddingVertical: 10,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '600',
        marginLeft:-210,
    },
});
