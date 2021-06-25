import React, { useState } from 'react';
import { View, Image, Text, TextInput, ScrollView, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Mainheader from '../../component/Mainheader';
import Modal from 'react-native-modal';
import moment from 'moment'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const Setting = ({ navigation }) => {
   const [date, setDate] = useState(new Date(1598051730000));
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
   const [isModalVisible, setModalVisible] = useState(false);
   const [selected, setSelected] = useState('')
   const onChange = (event, selectedDate) => {
      const start = moment(new Date(selectedDate).getTime()).format('DD-MM-YYYY')
      //  const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setSelected(start);
      console.log(selectedDate)
   };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };

   const showDatepicker = () => {
      showMode('date');
   };

   const showTimepicker = () => {
      showMode('time');
   };

   const toggleModal = () => {
      setModalVisible(!isModalVisible);

   };

   const backupData = [
      { label: 'Local', value: 0 },
      { label: 'Drive', value: 1 }

   ];
   return (
      <View style={{ height: '100%', width: '100%', backgroundColor: '#ADEFD1FF' }}>
         {/* <Text>{selected}</Text> */}
         <Mainheader props='Setting' navigation={navigation} />
         <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Pro_Version')}>
               <View style={{
                  flexDirection: 'column', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 10,
                  marginTop: '5%'
               }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                     <MaterialCommunityIcons name="star" color="yellow" size={35} />
                     <Text style={{ fontSize: 20, color: "#00203FFF", marginLeft: '1%', fontWeight: 'bold' }}>Pro Version</Text>
                  </View>
                  <View>
                     <Text style={{ fontSize: 15, color: "black" }}>Unlock Premium Benefites</Text>
                  </View>
               </View>
            </TouchableOpacity>
            <View style={{
               flexDirection: 'column', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
               marginTop: '2%'
            }}>
               <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Set Low Stock Warning</Text>
               <TextInput placeholder='Ex. 5' placeholderTextColor='gray' keyboardType={'numeric'}></TextInput>
            </View>
            <View style={{
               flexDirection: 'column', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
               marginTop: '2%'
            }}>
               <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Date</Text>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TextInput placeholder='DD-MM-YYYY' placeholderTextColor='black' value={selected}></TextInput>
                  <TouchableOpacity onPress={() => showDatepicker()}>
                     <MaterialCommunityIcons name="menu-down" color="black" size={50} />
                  </TouchableOpacity>
                  {/* <Button onPress={showDatepicker} title="DD-MM-YYYY" /> */}
                  {/* <Text>{selected}</Text> */}
               </View>
               {/* <View>
                  <Button onPress={showTimepicker} title="Show time picker!" />
               </View> */}
               {show && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={date}
                     mode={mode}
                     is24Hour={true}
                     display="default"
                     onChange={onChange}
                  />
               )}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Exported_Reports')}>
               <View style={{
                  flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
                  marginTop: '2%', alignItems: 'center'
               }}>
                  <View style={{ flexDirection: 'column' }}>
                     <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Exported Reports</Text>
                     <Text style={{ fontSize: 15, color: "black" }}>Exported pdf and excel reports</Text>
                  </View>
                  <Image source={require('../../assets/right-arrow.png')} style={{ height: '70%', width: '5%', marginLeft: '37%' }}></Image>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleModal()}>
               <View style={{
                  flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
                  marginTop: '2%', alignItems: 'center'
               }}>
                  <View style={{ flexDirection: 'column' }}>
                     <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Take Backup</Text>
                     <Text style={{ fontSize: 15, color: "black" }}>Take backup of data</Text>
                  </View>
                  <Modal
                  // style={{borderRadius:10}}
                     animationType={'slide'}
                     transparent={true}
                     onBackdropPress={() => toggleModal()}
                     onRequestClose={() => toggleModal()}
                     isVisible={isModalVisible}
                     onRequestClose={() => {
                        console.log('Modal has been closed.');
                     }}>
                     <View style={{
                        backgroundColor: 'white', height: '45%', width: '65%', borderRadius: 3,
                        marginLeft: '15%'
                     }}>
                        <View style={{ backgroundColor: '#00203FFF', alignItems: 'center', height: '20%', padding: 10 }}>
                           <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Backup data</Text>
                        </View>
                        <View>
                           <Text style={{fontSize:20, marginLeft:'13%'}}>Backup your data in</Text>
                           <View style={{marginTop:'2%', marginLeft:'17%'}}>
                           <RadioForm
                              radio_props={backupData}
                              onPress={(value) => { }}
                              formHorizontal={true}
                              buttonColor={'#00203FFF'} />
                              </View>
                        </View>
                        <View>
                        <Text style={{fontSize:17, color:'#00203FFF', margin:'2%', padding:6}}>Note: If you are switching your phone, than we highly recommend to use Drive Backup</Text>
                        </View>
<View style={{ justifyContent:'space-evenly', flexDirection:'row'}}>
   <TouchableOpacity>
   <View style={{ backgroundColor:'#00203FFF', padding:8, borderRadius:10}}>
      <Text style={{color:'white', fontSize:20}}>CANCEL</Text>
   </View>
   </TouchableOpacity>
   <TouchableOpacity>
   <View style={{ backgroundColor:'#00203FFF', padding:8, borderRadius:10}}>
      <Text style={{color:'white', fontSize:20}}>BACKUP</Text>
   </View>
   </TouchableOpacity>
</View>
                     </View>
                  </Modal>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Local_Backups')}>
               <View style={{
                  flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
                  marginTop: '2%', alignItems: 'center'
               }}>
                  <View style={{ flexDirection: 'column' }}>
                     <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Local Backups</Text>
                     <Text style={{ fontSize: 15, color: "black" }}>Restore data your local backups</Text>
                  </View>
                  <Image source={require('../../assets/right-arrow.png')} style={{ height: '70%', width: '5%', marginLeft: '35%' }}></Image>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Drive_Backups')}>
               <View style={{
                  flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
                  marginTop: '2%', alignItems: 'center'
               }}>
                  <View style={{ flexDirection: 'column' }}>
                     <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Drive backups</Text>
                     <Text style={{ fontSize: 15, color: "black" }}>Restore data your drive backups</Text>
                  </View>
                  <Image source={require('../../assets/right-arrow.png')} style={{ height: '70%', width: '5%', marginLeft: '35%' }}></Image>
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Backup_Transfer_Guide')}>
               <View style={{
                  flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
                  marginTop: '2%', alignItems: 'center'
               }}>
                  <View style={{ flexDirection: 'column' }}>
                     <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Backup Transfer Guide</Text>
                     <Text style={{ fontSize: 15, color: "black" }}>Steps for transfer backup to any device.</Text>
                  </View>
                  <Image source={require('../../assets/right-arrow.png')} style={{ height: '70%', width: "5%", marginLeft: '21%' }}></Image>
               </View>
            </TouchableOpacity>
            <View style={{
               flexDirection: 'row', backgroundColor: 'white', marginLeft: '3%', marginRight: '3%', padding: 8,
               marginTop: '2%', alignItems: 'center'
            }}>
               <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Clear All Data</Text>
                  <Text style={{ fontSize: 15, color: "black" }}>This will clear all stock entries.</Text>
               </View>
               <Image source={require('../../assets/right-arrow.png')} style={{ height: '70%', width: "5%", marginLeft: '37%' }}></Image>
            </View>
         </ScrollView>
      </View>
   )
}
export default Setting;