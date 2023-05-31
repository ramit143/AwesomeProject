
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';


// export const HeaderOfPreferenceComponent = ({ name, addBookmark }) => {
//     const navigation = useNavigation();

//     const handleGoBack = () => {
//         navigation.goBack();
//     };


//     return (
//         <View style={styles.header}>
//             <View style={styles.leftContainer}>
//                 <TouchableOpacity onPress={handleGoBack}>
//                     <Icon name="arrow-back-outline" size={24} color="black" />
//                 </TouchableOpacity>

//             </View>

//             <View style={styles.rightContainer}>
//                 <Text style={styles.title}>ప్రిఫరెన్స్</Text>
//             </View>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         paddingRight: 5,
//         paddingStart: 20,
//         alignItems: 'center',
//         backgroundColor: 'lightgray',
//         shadowRadius: 5,
//         borderRadius: 20,
//     },
//     leftContainer: {
//         flex: 1,
//         flexDirection: 'row', // Added flexDirection to align arrow and title horizontally
//         alignItems: 'center', // Added alignItems to center arrow and title vertically
//     },
//     rightContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     title: {
//         color: 'blue',
//         fontSize: 20,
//         fontWeight: '900',
//         marginLeft: 10, // Added marginLeft to create space between arrow and title
//     },
//     iconContainer: {
//         margin: 10,
//     },
// });


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// export const HeaderOfPreferenceComponent = ({ name, addBookmark }) => {
//     const navigation = useNavigation();

//     const handleGoBack = () => {
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.header}>
//             <View style={styles.leftContainer}>
//                 <TouchableOpacity onPress={handleGoBack}>
//                     <Icon name="arrow-back-outline" size={24} color="black" />
//                 </TouchableOpacity>
//                 <Text style={styles.title}>ప్రిఫరెన్స్</Text>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         paddingRight: 5,
//         paddingStart: 20,
//         alignItems: 'center',
//         backgroundColor: 'lightgray',
//         shadowRadius: 5,
//         borderRadius: 20,
//         paddingVertical: 10, // Added paddingVertical to create space vertically
//     },
//     leftContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     title: {
//         color: 'blue',
//         fontSize: 20,
//         fontWeight: '900',
//         marginLeft: 10,
//         justifyContent:'center',
//         alignItems:'center',
//         alignContent:'center',
//         alignSelf:'center'
//     },
// });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const HeaderOfPreferenceComponent = ({ name, addBookmark }) => {
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
                <Text style={styles.title}>ప్రిఫరెన్స్</Text>
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
