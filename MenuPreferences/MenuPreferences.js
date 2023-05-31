
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderOfMenuPreferenceComponent } from '../HeaderOfMenuPreference/HeaderOfMenuPreference';
import { AP_Districts_dropdown } from "../AP_Districts_DropDown/AP_Districts_DropDown";

export const MenuPreferenceComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

 

  //  ----------------------------------------------------------------------//

  const renderRow = ({ item }) => {
    const rowItems = item.map((dropdownItem) => {
      const imageUrl = dropdownItem.icon;
      console.log("response data === :", { item })
      return (
        <TouchableOpacity
          key={dropdownItem.tabid}
          style={styles.dropdownItem}
          onPress={() => handleOptionSelect(dropdownItem.telname)}
        >
          <View style={styles.dropdownSubItem}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.dropdownItemText}>{dropdownItem.telname}</Text>
            <Icon
              name={selectedOptions.includes(dropdownItem.telname) ? "checkbox-outline" : "square-outline"}
              size={20}
              color="blue"
            />
          </View>
        </TouchableOpacity>
      );
    });

    
// -------------------------------------------Checking----------------------//
    return (
      <View style={styles.row}>{rowItems}</View>
    );
  };

  const renderFlatList = () => {
    if (!data.response) {
      return null; // Return null or loading indicator while data is being fetched
    }

    const numberOfRows = Math.ceil(data.response.length / 3);
    const rows = Array.from({ length: numberOfRows }, (_, index) => {
      const startIndex = index * 3;
      const endIndex = startIndex + 3;
      return data.response.slice(startIndex, endIndex);
    });

    return (
      <FlatList
        data={rows}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOfMenuPreferenceComponent />
      {renderFlatList()}
     <AP_Districts_dropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownItemText: {
    marginLeft: 10,
    color: 'black',
  },
  dropdownSubItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    margin: 2,
    width: 110,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '95%',
    justifyContent: 'space-around',
    height: 60,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  itemText: {
    marginLeft: 20,
    color: 'black',
  },
});





// {"status":"success","statuscode":"200","statusmsg":"successfull","pagetype":"","response":[
// {"url":"","telname":"హోమ్","engname":"home","pageid":"","isprefrence":"false","tabid":"23","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/home-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/hometookiga_news.json","telname":"టూకీగా","engname":"hometookiga","pageid":"1","isprefrence":"false","tabid":"1","isactive":"1","isbookmark":0,"icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/tookiga-100x100.png",
// "subresponse":[]},{"url":"https:\/\/assets.eenadu.net\/appreactdata\/latest_news.json","telname":"తాజా","engname":"latest","pageid":"10","isprefrence":"true","tabid":"2","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/latest-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/apmain_news.json","telname":"AP వార్తలు","engname":"apmain","pageid":"3","isprefrence":"false","tabid":"7","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/ap-mainnews-100x100.png",
// "subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/tsmain_news.json","telname":"TS వార్తలు","engname":"tsmain","pageid":"3","isprefrence":"false","tabid":"29","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/ts-mainnews-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/national_news.json","telname":"జాతీయం","engname":"national","pageid":"10","isprefrence":"false","tabid":"5","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/national-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/international_news.json","telname":"అంతర్జాతీయం","engname":"international","pageid":"10","isprefrence":"false","tabid":"27","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/international-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/politics_news.json","telname":"రాజకీయం","engname":"politics","pageid":"10","isprefrence":"false","tabid":"8","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/politics-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/crime_news.json","telname":"క్రైమ్","engname":"crime","pageid":"10","isprefrence":"false","tabid":"11","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/crime-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/cinema_news.json","telname":"సినిమా","engname":"cinema","pageid":"10","isprefrence":"true","tabid":"3","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/cinema-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/sports_news.json","telname":"క్రీడలు","engname":"sports","pageid":"10","isprefrence":"true","tabid":"4","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/sports-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/business_news.json","telname":"బిజినెస్","engname":"business","pageid":"10","isprefrence":"true","tabid":"6","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/business-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/vasundhara_news.json","telname":"వసుంధర","engname":"vasundhara","pageid":"3","isprefrence":"false","tabid":"12","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/vasundhara-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/general_news.json","telname":"జనరల్","engname":"general","pageid":"10","isprefrence":"false","tabid":"28","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/general-100x100.png","subresponse":[]},
// {"url":"",
// "telname":"AP జిల్లాలు",
// "engname":"ap districts",
// "pageid":"4",
// "isprefrence":"false",
// "tabid":"14",
// "isactive":"1",
// "isbookmark":"1",
// "icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/districts-100x100.png",
// "subresponse":[
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/anantapur.json",
//     "id":"1",
//     "teltitle":"అనంతపురం",
//     "engtitle":"Anantapur",
//     "pageid":"3",
//     "tabid":"14001",
//     "isactive":"1",
//     "isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/chittoor.json","id":"2","teltitle":"చిత్తూరు","engtitle":"Chittoor","pageid":"3","tabid":"14002","isactive":"1","isbookmark":"1"},{"url":"https:\/\/assets.eenadu.net\/appreactdata\/east-godavari.json","id":"3","teltitle":"తూర్పు గోదావరి","engtitle":"East-Godavari","pageid":"3","tabid":"14003","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/guntur.json","id":"4","teltitle":"గుంటూరు","engtitle":"Guntur","pageid":"3","tabid":"14004","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/ysr.json","id":"5","teltitle":"వైయస్ఆర్","engtitle":"Ysr","pageid":"3","tabid":"14005","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/amaravati-krishna.json","id":"6","teltitle":"అమరావతి","engtitle":"Amaravati-Krishna","pageid":"3","tabid":"14006","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/kurnool.json","id":"7","teltitle":"కర్నూలు","engtitle":"Kurnool","pageid":"3","tabid":"14007","isactive":"1","isbookmark":"1"},{"url":"https:\/\/assets.eenadu.net\/appreactdata\/prakasam.json","id":"8","teltitle":"ప్రకాశం","engtitle":"Prakasam","pageid":"3","tabid":"14008","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/nellore.json","id":"9","teltitle":"శ్రీపొట్టి శ్రీరాములు నెల్లూరు","engtitle":"Nellore","pageid":"3","tabid":"14009","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/srikakulam.json","id":"10","teltitle":"శ్రీకాకుళం","engtitle":"Srikakulam","pageid":"3","tabid":"14010","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/visakhapatnam.json","id":"11","teltitle":"విశాఖపట్నం","engtitle":"Visakhapatnam","pageid":"3","tabid":"14011","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/vizianagaram.json","id":"12","teltitle":"విజయనగరం","engtitle":"Vizianagaram","pageid":"3","tabid":"14012","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/west-godavari.json","id":"13","teltitle":"పశ్చిమ గోదావరి","engtitle":"West-Godavari","pageid":"3","tabid":"14013","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/parvatipuram-manyam.json","id":"707","teltitle":"పార్వతీపురం మన్యం","engtitle":"Parvatipuram-Manyam","pageid":"3","tabid":"14707","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/alluri-sitharama-raju.json","id":"708","teltitle":"అల్లూరి సీతారామరాజు","engtitle":"Alluri-Sitharama-Raju","pageid":"3","tabid":"14708","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/karnataka.json","id":"702","teltitle":"కర్ణాటక","engtitle":"Karnataka","pageid":"3","tabid":"14702","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/odisha.json","id":"703","teltitle":"ఒడిశా","engtitle":"Odisha","pageid":"3","tabid":"14703","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/tamil-nadu.json","id":"704","teltitle":"తమిళనాడు","engtitle":"Tamil-Nadu","pageid":"3","tabid":"14704","isactive":"1","isbookmark":"1"}
// ]
// },
// {"url":"",
// "telname":"TS జిల్లాలు",
// "engname":"ts districts",
// "pageid":"4",
// "isprefrence":"false",
// "tabid":"30",
// "isactive":"1",
// "isbookmark":"1",
// "icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/districts-100x100.png",
// "subresponse":[
//     {
//         "url":"https:\/\/assets.eenadu.net\/appreactdata\/adilabad.json",
//         "id":"528","teltitle":"ఆదిలాబాద్","engtitle":"Adilabad","pageid":"3",
//         "tabid":"30528",
//         "isactive":"1",
//         "isbookmark":"1"
//     },
//     {
//         "url":"https:\/\/assets.eenadu.net\/appreactdata\/hyderabad.json",
//         "id":"529",
//         "teltitle":"హైదరాబాద్",
//         "engtitle":"Hyderabad",
//         "pageid":"3",
//         "tabid":"30529",
//         "isactive":"1",
//         "isbookmark":"1"
//     },
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/karimnagar.json","id":"530","teltitle":"కరీంనగర్","engtitle":"Karimnagar","pageid":"3","tabid":"30530","isactive":"1","isbookmark":"1"},{"url":"https:\/\/assets.eenadu.net\/appreactdata\/khammam.json","id":"531","teltitle":"ఖమ్మం","engtitle":"Khammam","pageid":"3","tabid":"30531","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/mahbubnagar.json","id":"532","teltitle":"మహబూబ్ నగర్","engtitle":"Mahbubnagar","pageid":"3","tabid":"30532","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/medak.json","id":"533","teltitle":"మెదక్","engtitle":"Medak","pageid":"3","tabid":"30533","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/nalgonda.json","id":"534","teltitle":"నల్గొండ","engtitle":"Nalgonda","pageid":"3","tabid":"30534","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/nizamabad.json","id":"535","teltitle":"నిజామాబాద్","engtitle":"Nizamabad","pageid":"3","tabid":"30535","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/warangal.json","id":"697","teltitle":"వరంగల్","engtitle":"Warangal","pageid":"3","tabid":"30697","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/karnataka.json","id":"702","teltitle":"కర్ణాటక","engtitle":"Karnataka","pageid":"3","tabid":"30702","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/odisha.json","id":"703","teltitle":"ఒడిశా","engtitle":"Odisha","pageid":"3","tabid":"30703","isactive":"1","isbookmark":"1"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/tamil-nadu.json","id":"704","teltitle":"తమిళనాడు","engtitle":"Tamil-Nadu","pageid":"3","tabid":"30704","isactive":"1","isbookmark":"1"}
// ]},
// {
//     "url":"https:\/\/assets.eenadu.net\/appreactdata\/nri_news.json","telname":"ఎన్ఆర్ఐ","engname":"nri","pageid":"10","isprefrence":"false","tabid":"17","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/nri-100x100.png","subresponse":[]
// },
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/appspecial_news.json","telname":"వెబ్ ప్రత్యేకం","engname":"appspecial","pageid":"10","isprefrence":"false","tabid":"18","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/appspecial-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/photos_news.json","telname":"ఫొటోలు","engname":"photos","pageid":"7","isprefrence":"false","tabid":"15","isactive":"1","isbookmark":0,"icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/photos-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/videos_news.json","telname":"వీడియోలు","engname":"videos","pageid":"8","isprefrence":"false","tabid":"16","isactive":"1","isbookmark":0,"icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/videos-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/graham-anugraham_news.json","telname":"గ్రహం - అనుగ్రహం","engname":"graham-anugraham","pageid":"5","isprefrence":"false","tabid":"20","isactive":"1","isbookmark":0,"icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/graham-anugraham-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/stories_news.json","telname":"కథనాలు","engname":"stories","pageid":"10","isprefrence":"false","tabid":"10","isactive":"0","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/stories-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/editorial_news.json","telname":"ఎడిటోరియల్","engname":"editorial","pageid":"3","isprefrence":"false","tabid":"24","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/editorial-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/viralvideos_news.json","telname":"వైరల్ వీడియోస్ ","engname":"viralvideos","pageid":"10","isprefrence":"false","tabid":"21","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/viralvideos-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/sundayspecial_news.json","telname":"సండే స్పెషల్","engname":"sundayspecial","pageid":"3","isprefrence":"false","tabid":"19","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/sundayspecial-100x100.png","subresponse":[]},
// {"url":"","telname":"ఫీచర్ పేజీలు","engname":"specialpages","pageid":"4","isprefrence":"false","tabid":"13","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/specialpages-100x100.png",
// "subresponse":[
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/etharam_news.json","id":"1","teltitle":"ఈతరం","engtitle":"etharam","pageid":"3","tabid":"13001","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/etharam-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/haibujji_news.json","id":"2","teltitle":"హాయ్ బుజ్జీ","engtitle":"haibujji","pageid":"3","tabid":"13002","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/haibujji-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/chaduvu_news.json","id":"3","teltitle":"చదువు","engtitle":"chaduvu","pageid":"3","tabid":"13003","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/chaduvu-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/sthirasthi_news.json","id":"5","teltitle":"స్థిరాస్తి","engtitle":"sthirasthi","pageid":"3","tabid":"13005","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/sthirasthi-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/sukhibava_news.json","id":"8","teltitle":"సుఖీభవ","engtitle":"sukhibava","pageid":"3","tabid":"13008","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/sukhibava-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/techkaburlu_news.json","id":"9","teltitle":"ఈ-నాడు","engtitle":"techkaburlu","pageid":"3","tabid":"13009","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/techkaburlu-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/makarandam_news.json","id":"15","teltitle":"మకరందం","engtitle":"makarandam","pageid":"3","tabid":"13015","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/makarandam-100x100.png"},
//     {"url":"https:\/\/assets.eenadu.net\/appreactdata\/aaha_news.json","id":"16","teltitle":"ఆహా","engtitle":"aaha","pageid":"3","tabid":"13016","isactive":"1","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/aaha-100x100.png"}
// ]},
// {"url":"https:\/\/api.eenadu.net\/newmobileapis\/newnotifications_api.php?stateid=99","telname":"నోటిఫికేషన్‌లు","engname":"notifications","pageid":"","isprefrence":"false","tabid":"26","isactive":"0","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/notifications-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/state_news.json","telname":"రాష్ట్రవార్తలు","engname":"state","pageid":"3","isprefrence":"false","tabid":"9","isactive":"0","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/state-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/techkaburlu_news.json","telname":"టెక్ కబుర్లు ‌","engname":"techkaburlu","pageid":"10","isprefrence":"false","tabid":"25","isactive":"0","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/techkaburlu-100x100.png","subresponse":[]},
// {"url":"https:\/\/assets.eenadu.net\/appreactdata\/special_news.json","telname":"స్పెషల్","engname":"special","pageid":"1","isprefrence":"false","tabid":"22","isactive":"0","isbookmark":"1","icon":"https:\/\/assets.eenadu.net\/_assets\/app-icons\/special-100x100.png","subresponse":[]}
// ]}