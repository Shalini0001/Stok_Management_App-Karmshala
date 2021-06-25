import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Mainheader = ({ props, showProfileData, showIcon, showTransaction, showExport, navigation, showPopup }) => {

  return (
    <View style={{
      flexDirection: 'row', height: '10%', justifyContent: 'flex-start', alignItems: 'center',
      backgroundColor: '#00203FFF'
    }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color="white" size={35}>

        </MaterialCommunityIcons>
      </TouchableOpacity>
      {/* <Image source={require('../assets/left-arrow.png')} style={{height:'30%', width:'5%', color:'white'}}></Image> */}
      <Text style={{ fontSize: 20, color: 'white', marginLeft: "5%" }}>{props}</Text>
      {showProfileData == true ?
        <View style={{ flexDirection: 'row', marginLeft: '30%', }}>
          <MaterialCommunityIcons name="search-web" color="white" size={35} style={{ marginLeft: '15%' }}></MaterialCommunityIcons>
          <MaterialCommunityIcons name="plus-circle" color="white" size={30} style={{ marginLeft: '7%' }}></MaterialCommunityIcons>
          <MaterialCommunityIcons name="scan-helper" color="white" size={25} style={{ marginLeft: '10%' }}></MaterialCommunityIcons>
        </View> : null}

      {showIcon == true ?
        <View style={{ flexDirection: 'row', marginLeft: '40%', }}>
          <MaterialCommunityIcons name="search-web" color="white" size={35} style={{ marginLeft: '15%' }}></MaterialCommunityIcons>
          <MaterialCommunityIcons name="scan-helper" color="white" size={25} style={{ marginLeft: '10%' }}></MaterialCommunityIcons>
        </View> : null}

      {showTransaction == true ?
        <View style={{ flexDirection: 'row', marginLeft: '40%', }}>
          <MaterialCommunityIcons name="transfer-down" color="white" size={25} style={{ marginLeft: '10%' }}></MaterialCommunityIcons>
        </View> : null}

      {showExport == true ?
        <View style={{ flexDirection: 'row', marginLeft: '40%', }}>
          <MaterialCommunityIcons name="arrow-up" color="white" size={35} style={{ marginLeft: '5%' }}></MaterialCommunityIcons>
        </View> : null}

      {/* {showPopup == true ?
        <View>
          <Text style={{ fontSize: 20, color: 'white'}}>{show}</Text>
        </View> : null} */}
    </View>


  )
}
export default Mainheader;