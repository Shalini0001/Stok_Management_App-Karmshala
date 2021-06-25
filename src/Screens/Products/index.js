import React,{useState} from 'react';
import { View, ImageBackground, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';
import Mainheader from '../../component/Mainheader';
const Products = ({navigation}) => {
    const [openfav, setOpenFav] = useState(false)
    
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <Mainheader props='Products' showProfileData={true}  navigation={navigation}/>
            <View style={{ flexDirection: 'row', marginLeft: '30%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00203FFF' }}>TOTAL PRODUCTS:</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: '2%' }}>0</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: '30%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00203FFF' }}>TOTAL STOCK IN HAND:</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: '2%' }}>0</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: '30%' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00203FFF' }}>TOTAL STOCK PRICE:</Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: '2%' }}>0</Text>
            </View>
            <View style={{ alignSelf: 'center', marginTop: '30%' }}>
                <MaterialCommunityIcons name="package-variant" color="#00203FFF" size={100}>

                </MaterialCommunityIcons>
            </View>
            <View style={{ marginLeft: '35%', marginTop: '10%' }}>
                <Text style={{ fontSize: 20, color: '#00203FFF', fontWeight: 'bold' }}>No Product</Text>
            </View>
            <View style={{ marginLeft: '20%' }}>
                <Text style={{ fontSize: 20, color: 'gray' }}>Please add your product</Text>
            </View>
            <View style={{ marginTop: '45%' }}>

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
                                bottom: 130,
                            }}
                            small
                            icon="share"
                            label="Export"
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
                            label="Scan"
                            icon="scan-helper"
                            onPress={() => console.log('Pressed')}
                        />
                    </View> : null}
            </View>
        </View>
    )
}
export default Products;