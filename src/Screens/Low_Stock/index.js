import React from 'react';
import { View, ImageBackground,Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mainheader from '../../component/Mainheader';
const Low_Stock=({navigation})=>{
    return(
        <View style={{height:'100%', width:'100%'}}>
            <Mainheader props='Low Stock' showIcon={true}  navigation={navigation}/>
              <View style={{alignSelf:'center',marginTop:'40%'}}>
            <MaterialCommunityIcons name="progress-alert" color="#00203FFF" size={100}>
      
            </MaterialCommunityIcons>
            </View>
            <View style={{marginLeft:'30%', marginTop:'10%'}}>
                <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>No Low Stock</Text>
                </View>
                <View style={{marginLeft:'20%'}}>
                <Text style={{fontSize:20, color:'gray'}}>No Low Stock product found</Text>
            </View>
        </View>
    )
}
export default Low_Stock;