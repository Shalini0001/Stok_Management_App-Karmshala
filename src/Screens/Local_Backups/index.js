import React from 'react';
import { View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mainheader from '../../component/Mainheader';

const Local_Backups =({navigation})=>{
    return(
<View style={{height:'100%', width:'100%', backgroundColor: '#ADEFD1FF'}}>
<Mainheader props='Local_Backups' showExport={true}  navigation={navigation} />
<View style={{backgroundColor: 'white', borderRadius:10, padding:5}}>
    <Text style={{color:"#00203FFF", fontSize:20}}>Backup Path: /storage/emulated/0/StockMgtBackup</Text>
    </View>
    <View style={{marginTop:'45%', alignItems:'center'}}>
    <MaterialCommunityIcons name="plus-circle" color="#00203FFF" size={90}/>
    </View>
    <View style={{flexDirection:'column', marginTop:'1%'}}>
        <Text style={{color:"#00203FFF", fontSize:23, marginLeft:'30%'}}>No backup found</Text>
        <Text style={{color:"black", fontSize:17, marginLeft:'20%'}}>Please backup your data to restore</Text>
    </View>
</View>
    )
}
export default Local_Backups;