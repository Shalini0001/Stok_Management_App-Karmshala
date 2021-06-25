import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
const TermsofServices=({navigation})=>{
    const AcceptandContinue=()=>{
        navigation.navigate('Stock_Management')
    }
    return(
<View style={{backgroundColor:'#ADEFD1FF', height:'100%',width:'100%'}}>
    <View style={{alignItems:'center', marginTop:'5%'}}>
        <Image source={require('../../assets/termsofservices.png')} style={{height:'40%', width:'30%'}}></Image>
    </View>
    <View style={{alignItems:'flex-start', marginTop:'-30%', margin:'3%'}}>
    <Text style={{fontSize:25, color:'#00203FFF', fontWeight:'bold'}}>Terms of Service</Text>
    </View>
    <View style={{ margin:'3%'}}>
    <Text style={{fontSize:17}}>This app is governed by Magnetic Lab's Terms of Service. By continuing to use this app you represent that you have read
        and accept the Terms of Services, Privacy and Permission disclosure.</Text>
    </View>
    <TouchableOpacity>
    <View style={{alignItems:'flex-start', margin:'3%'}}>
    <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>TERMS OF SERVICE</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{alignItems:'flex-start', margin:'3%'}}>
    <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>PRIVACY POLICY</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{alignItems:'flex-start', margin:'3%'}}>
    <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>PERMISSION DISCLOSURE</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> AcceptandContinue()}>
    <View style={{backgroundColor:'#00203FFF', marginTop:'33%', alignItems:'center', 
    marginLeft:'10%', marginRight:'10%', padding:8, borderRadius:5}}>
        <Text style={{fontSize:25, color:'#ADEFD1FF'}}>ACCEPT AND CONTINUE</Text>
    </View>
    </TouchableOpacity>
</View>
    )
}
export default TermsofServices;