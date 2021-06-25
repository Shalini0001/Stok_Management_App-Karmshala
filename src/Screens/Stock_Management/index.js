import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image, Text, View, Button, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import * as utility from '../../utility/index';

const Stock_Management = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };
    useEffect(async () => {
        let token = await utility.getFromLocalStorge('token')
        console.log('check token', token)
    })

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <View style={{
                backgroundColor: '#00203FFF', height: '10%', padding: 7, alignItems: 'center',
                flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{ fontSize: 20, color: 'white' }}>Stock Management System</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Pro_Version')}>
                        <View>
                            <Image source={require('../../assets/star.png')} style={{ height: 20, width: 20 }}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleModal()}>
                        <View>
                            <Image source={require('../../assets/dot.jpg')} style={{ height: 40, width: 40 }}></Image>
                        </View>
                    </TouchableOpacity>
                    {/* <Modal isVisible={isModalVisible}
                        coverScreen={true}
                        hasBackdrop={true}
                        transparent={true}
                        
                    > */}
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        onBackdropPress={() => toggleModal()}
                        onRequestClose={() => toggleModal()}
                        isVisible={isModalVisible}
                        onRequestClose={() => {
                            console.log('Modal has been closed.');
                        }}>
                        <View style={{ backgroundColor: 'white', height: '30%', width: '50%', alignSelf: 'flex-end',
                         marginTop: '-100%', borderRadius:3, padding:8 }}>
                            <TouchableOpacity onPress={() => console.log("check modal funcation")}>
                                <View style={{ marginLeft: '2%', marginTop:'3%' }}>
                                    <Text style={{ fontSize: 20 }}>Rate Us</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ marginLeft: '2%', marginTop:'3%' }}>
                                    <Text style={{ fontSize: 20 }}>Feedback</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ marginLeft: '2%', marginTop:'3%' }}>
                                    <Text style={{ fontSize: 20 }}>Share with friends</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ marginLeft: '2%', marginTop:'3%' }}>
                                    <Text style={{ fontSize: 20 }}>Privacy Policy</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ marginLeft: '2%', marginTop:'3%' }}>
                                    <Text style={{ fontSize: 20 }}>Terms of Service</Text>
                                </View>
                            </TouchableOpacity>

                            {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                        </View>
                    </Modal>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <View style={{
                    backgroundColor: '#E2D1F9', marginLeft: '5%', marginRight: '5%',
                    padding: 7, marginTop: '5%', borderRadius: 10, flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons name="view-dashboard" color="#00203FFF" size={40} />
                    <Text style={{ fontSize: 30, color: '#00203FFF', marginLeft: '2%' }}>Dashboard</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                <View style={{
                    backgroundColor: '#F2BC94', marginLeft: '5%', marginRight: '5%',
                    padding: 7, marginTop: '5%', borderRadius: 10, flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons name="package-variant" color="#00203FFF" size={40} />
                    <Text style={{ fontSize: 30, color: '#00203FFF', marginLeft: '2%' }}>Products</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Low_Stock')}>
                <View style={{
                    backgroundColor: '#B1D877', marginLeft: '5%', marginRight: '5%',
                    padding: 7, marginTop: '5%', borderRadius: 10, flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons name="progress-alert" color="#00203FFF" size={40} />
                    <Text style={{ fontSize: 30, color: '#00203FFF', marginLeft: '2%' }}>Low Stock</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('All_Transaction')}>
                <View style={{
                    backgroundColor: '#F9A0A3', marginLeft: '5%', marginRight: '5%',
                    padding: 7, marginTop: '5%', borderRadius: 10, flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons name="card-account-details" color="#00203FFF" size={40} />
                    <Text style={{ fontSize: 30, color: '#00203FFF', marginLeft: '2%' }}>All Transactions</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <View style={{
                    backgroundColor: '#DDc6B6', marginLeft: '5%', marginRight: '5%',
                    padding: 7, marginTop: '5%', borderRadius: 10, flexDirection: 'row'
                }}>
                    <MaterialCommunityIcons name="tools" color="#00203FFF" size={40} />
                    <Text style={{ fontSize: 30, color: '#00203FFF', marginLeft: '2%' }}>Setting</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Stock_Management;