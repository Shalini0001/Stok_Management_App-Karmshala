import React from 'react';
import { View, Text, ScrollView, B} from 'react-native';
import Mainheader from '../../component/Mainheader';

const Backup_Transfer_Guide =({navigation})=>{
    return(
<View style={{height:'100%', width:'100%', backgroundColor: 'white'}}>
<Mainheader props='Backup Transfer Guide'  navigation={navigation} />
<ScrollView>
<View style={{marginTop:'2%' , padding:8}}>
    <Text style={{fontSize:20, color:'#00203FFF'}}>Steps For transfer backup to any mobile or for transfer backup to any phone:</Text>
</View>
<View style={{marginTop:'2%' , padding:8}}>
    <Text style={{fontSize:20, color:'#00203FFF',fontWeight: "bold"}}>Step: 1</Text>
    {/* <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>Take latest backup from "Local Backup" section in old phone.</Text> */}
    <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>
    <Text>Take latest backup from</Text>
  <Text style={{fontWeight: "bold"}}> "Local Backup"</Text>
  <Text> section in old phone.</Text>
    </Text>
</View>
<View style={{marginTop:'2%' , padding:8}}>
    <Text style={{fontSize:20, color:'#00203FFF',fontWeight: "bold"}}>Step: 2</Text>
    <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>Copy that backup folder (Internal storage root folder) from old phone and transfer it to new phone (Internal storage root folder).</Text>
</View>
<View style={{marginTop:'2%' , padding:8}}>
    <Text style={{fontSize:20, color:'#00203FFF',fontWeight: "bold"}}>Step: 3</Text>
    <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>After transferring backup folder to new phone now you can see backup list into "Local Backup" section.</Text>
</View>
<View style={{marginTop:'2%' , padding:8}}>
    <Text style={{fontSize:20, color:'#00203FFF', fontWeight: "bold"}}>Step: 4</Text>
    <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>Restore your latest backup.</Text>
    {/* <Text style={{color:'black', fontSize:20}}>Note: You can also put your local backup into safe place like Your Drive, Cloud Storage, Hard drive etc. Whenever you need to restore just put backup into internal Storage root folder.</Text> */}
    <Text style={{color:'black', fontSize:20, marginTop:'1%'}}>
    <Text style={{fontWeight: "bold"}}>Note:</Text>
  <Text> You can also put your local backup into safe place like Your Drive, Cloud Storage, Hard drive etc. Whenever you need to restore just put backup into internal Storage root folder.</Text>
    </Text>
    <Text style={{fontSize:20, color:'#00203FFF', marginTop:'2%', fontWeight: "bold"}}>** Please don't change the folder name (/StockMgtBackup).</Text>
</View>
</ScrollView>
</View>
    )
}
export default Backup_Transfer_Guide;