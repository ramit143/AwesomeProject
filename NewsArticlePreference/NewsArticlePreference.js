import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function NewsArticlePreference() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);



    const handleOptionSelect = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleDropdownToggle = (dropdown) => {
        if (selectedDropdown === dropdown) {
            setSelectedDropdown(null); // Deselect the current dropdown if clicked again
        } else {
            setSelectedDropdown(dropdown);
        }
        setShowDropdown(!showDropdown);
    };
    return (
        <View>
            {/* NEWS Article Preferences */}
            <TouchableOpacity style={styles.itemContainer} onPress={() => handleDropdownToggle("news")}>
                <View style={styles.itemContent}>
                    <Icon name="hand-right" size={20} color="black" />
                    <Text style={styles.itemText}>NEWS Article ప్రిఫరెన్స్</Text>
                </View>
                <View>
                    <Icon name={showDropdown ? "chevron-up" : "chevron-down"} size={20} color="black" />
                </View>
            </TouchableOpacity>

            {showDropdown && selectedDropdown === "news" && (
                <View style={styles.dropdownContainer}>
                    {/* Add your dropdown items here */}
                    {/* Example dropdown item */}
                    <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 1")}>
                        <Icon
                            name={selectedOptions.includes("Option 1") ? "checkbox-outline" : "square-outline"}
                            size={20}
                            color="black"
                        />
                        <Text style={styles.dropdownItemText}>MIDDLE STRIPE</Text>
                    </TouchableOpacity>

                    {/* Example dropdown item */}
                    <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 2")}>
                        <Icon
                            name={selectedOptions.includes("Option 2") ? "checkbox-outline" : "square-outline"}
                            size={20}
                            color="black"
                        />
                        <Text style={styles.dropdownItemText}>BOTTOM STRIPE</Text>
                    </TouchableOpacity>

                    {/* Example dropdown item */}
                    <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 3")}>
                        <Icon
                            name={selectedOptions.includes("Option 3") ? "checkbox-outline" : "square-outline"}
                            size={20}
                            color="black"
                        />
                        <Text style={styles.dropdownItemText}>SWIPE</Text>
                    </TouchableOpacity>
                </View>

            )}
        </View>
    )
}

export default NewsArticlePreference;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '95%',
        justifyContent: "space-around",
        height: 60,
    
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    itemSubContainer: {
        flexDirection: 'row',
        paddingRight: 140,
    },
    itemText: {
        marginLeft: 20,
        color: 'black',
    },
  
   
    dropdownContainer: {
        width: '95%',
        borderColor: 'black',
        marginTop: 5,
        paddingHorizontal: 0,
        paddingVertical: 5,
        flexDirection: 'row', // Changed from 'row' to 'column'
    },
   
    dropdownItemText: {
        marginLeft: 10,
        color: 'black',
       
    },
    dropdownItem2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10, // Changed from 20 to 10 for smaller padding
        paddingHorizontal: 2, // Changed from 20 to 15 for smaller padding
        borderRadius: 8,
        marginBottom: 10,
        width: 110,
    },

});

