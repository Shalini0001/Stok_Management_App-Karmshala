import React,{useState} from 'react';
import { View, ImageBackground,Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';
import Mainheader from '../../component/Mainheader';

const All_Transaction=({navigation })=>{
    const [openfav, setOpenFav] = useState(false)

    return(
        <View style={{height:'100%', width:'100%'}}>
             <Mainheader props='All Transactions' showTransaction={true}  navigation={navigation}/>
              <View style={{alignSelf:'center',marginTop:'30%'}}>
            <MaterialCommunityIcons name="card-account-details" color="#00203FFF" size={100}>
            
            </MaterialCommunityIcons>
            </View>
            <View style={{marginLeft:'30%', marginTop:'10%'}}>
                <Text style={{fontSize:20, color:'#00203FFF', fontWeight:'bold'}}>No Transactions</Text>
                </View>
                <View style={{marginLeft:'20%'}}>
                <Text style={{fontSize:20, color:'gray'}}>Please add your transaction</Text>
            </View>
            <View style={{ marginTop: '60%' }}>

<FAB
    style={{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: -10,
        color: '#00203FFF'
    }}
    small
    icon="plus"
    onPress={() => setOpenFav(!openfav)}
/>
{openfav == true ?
    <View>
        <FAB
            style={{
                position: 'absolute',
                margin: 25,
                right: -20,
                bottom: 30,
            }}
            small
            icon="plus"
            label="Add New"
            onPress={() => console.log('Pressed')}
        />
        <FAB
            style={{
                position: 'absolute',
                margin: 25,
                right: -20,
                bottom: 80,
            }}
            small
            icon="share"
            label="Export"
            onPress={() => console.log('Pressed')}
        />
    </View> : null}
</View>
        </View>
    )
}
export default All_Transaction;