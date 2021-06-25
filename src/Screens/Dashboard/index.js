import React, { useState } from 'react';
import { View, ImageBackground,Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { FloatingAction } from "react-native-floating-action";
import { FAB } from 'react-native-paper';
import Mainheader from '../../component/Mainheader';
const Dashboard=({navigation})=>{
    const [openfav,setOpenFav]=useState(false)
   
    return(
        <View style={{height:'100%', width:'100%'}}>
            <Mainheader props='Dashboard' navigation={navigation}/>
            <View style={{alignSelf:'center',marginTop:'35%'}}>
            <MaterialCommunityIcons name="view-dashboard" color="#00203FFF" size={100}>
            </MaterialCommunityIcons>
            </View>
            <View style={{marginLeft:'30%', marginTop:'10%'}}>
                <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>No Transactions</Text>
                </View>
                <View style={{marginLeft:'20%'}}>
                <Text style={{fontSize:20, color:'gray'}}>Please add your transaction</Text>
            </View>
            <View style={{marginTop:'60%'}}>
 
  <FAB
    style={{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        color:'#00203FFF'
      }}
    small
    icon="plus"
    onPress={() =>setOpenFav(!openfav)}
  />
  {openfav==true?
  <View>
  <FAB
    style={{
        position: 'absolute',
        margin: 25,
        right: -20,
        bottom: 40,
      }}
    small
    icon="plus"
    label="Prduct In"
    onPress={() => console.log('Pressed')}
  />
  <FAB
    style={{
        position: 'absolute',
        margin: 25,
        right: -20,
        bottom: 90,
      }}
    small
    label="Product Out"
    icon="minus"
    onPress={() => console.log('Pressed')}
  />
  </View>:null}
</View>
        </View>
    )
}
export default Dashboard;