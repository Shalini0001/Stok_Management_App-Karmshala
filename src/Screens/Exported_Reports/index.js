import React from 'react';
import { Text, View } from 'react-native';
import Mainheader from '../../component/Mainheader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Exported_Report=({navigation})=>{
    return(
<View style={{height:'100%', width:'100%', backgroundColor: '#ADEFD1FF'}}>
<Mainheader props='Exported Reports' showExport={true}  navigation={navigation} />
<View style={{backgroundColor: 'white', borderRadius:10, padding:5}}>
    <Text style={{color:"#00203FFF", fontSize:20}}>Report Path: /storage/emulated/0/StockMgtReport</Text>
    </View>
    <View style={{marginTop:'45%', alignItems:'center'}}>
    <MaterialCommunityIcons name="pdf-box" color="#00203FFF" size={100}/>
    </View>
    <View style={{flexDirection:'column', marginTop:'1%'}}>
        <Text style={{color:"#00203FFF", fontSize:23, marginLeft:'30%'}}>No Reports found</Text>
        <Text style={{color:"black", fontSize:17, marginLeft:'25%'}}>Export reports to view or share</Text>
    </View>
</View>
    )
}
export default Exported_Report;