import React,  { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

const Splash=({navigation})=>{
    useEffect(()=>{
        TimeoutHandle = setTimeout(()=>{
            data();
          }, 2000);
})
const data =()=>{
    navigation.navigate("Login")

}
    return(
        <View style={{backgroundColor:'#072c50', height:'100%',width:'100%'}}>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:'40%'}}>
                <Image source={require('../../assets/warehouse.png')} resizeMode="center" style={{height:'40%',width:'40%', borderRadius:10}} ></Image>
                 <Text style={{fontSize:20, color:'#F4B41A', fontWeight:'bold', marginTop:'5%'}}>Karmshala</Text>
            </View>
        </View>
    )
}
export default Splash;