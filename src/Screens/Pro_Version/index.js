import React from 'react';
import{ Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mainheader from '../../component/Mainheader';
const Pro_Version=({navigation})=>{
    return(
<View style={{height:'100%', width:'100%', backgroundColor: '#ADEFD1FF'}}>
<Mainheader props='Pro Version'  navigation={navigation}/>
<View style={{margin:'2%'}}>
    <Text style={{fontSize:20}}>Buy Pro version of our app to unlock Premium Benefits.</Text>
</View>
<View style={{margin:'2%', flexDirection:'row', justifyContent:'center'}}>
    <View style={{backgroundColor:'#00203FFF', padding:8}}>
        <Text style={{color:'white', fontSize:20}}>Rs. 150.00</Text>
    </View>
    <View style={{backgroundColor: 'white',padding:8}}>
        <Text style={{color:'#00203FFF', fontSize:20}}>Pro Version</Text>
    </View>
</View>
<View style={{margin:'2%'}}>
    <Text style={{fontSize:18}}>Premium Benefits:</Text>
</View>
<View style={{flexDirection:"column",margin:'2%'}}>
<View style={{flexDirection:'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
<MaterialCommunityIcons name="star" color="yellow" size={30} />
    <Text style={{fontSize:18, marginLeft:'2%'}}>No More Advertisements</Text>
</View>
<View style={{flexDirection:'row',  justifyContent: 'flex-start', alignItems: 'center'}}>
<MaterialCommunityIcons name="star" color="yellow" size={30} />
    <Text style={{fontSize:18, marginLeft:'2%'}}>One-Tme Payment (Pro Version for Lifetime)</Text>
</View>
</View>
<TouchableOpacity>
<View style={{ backgroundColor:'#00203FFF', padding:8, alignItems:'center', margin:"2%",
borderRadius:10}}>
    <Text style={{color:'white', fontSize:20}}>Buy Plan</Text>
</View>
</TouchableOpacity>
</View>
    )
}
export default Pro_Version;
