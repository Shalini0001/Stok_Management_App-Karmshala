import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Mainheader from '../../component/Mainheader';
import * as Service from '../../api/Service';
import * as url from '../../api/url';
import * as utility from '../../utility/index';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('lee@gmail.com');
  const [password, setPassword] = useState('123456789');
  // const [condition, setCondition] = useState(false);
  const [loading, setLoading] = useState(false)
  const Login = async () => {
    // setLoading(!loading)
    // onPress={startLoading}

    startLoading();
    console.log(email);
    console.log(password);
    if (email == '' || password == '') {
      Alert.alert('Please fill required field')
    }
    else if (await utility.isValidEmail(email)) {
      Alert.alert('Fill valid email and password')
    }
    else {
      navigation.navigate('Stock_Management')
      // let body = {
      //   email: email,
      //   password: password,
      }
       
    //   let res = await Service.post(url.LOGIN, '', body)
    //   if(res.isSuccess==true){
    //     navigation.navigate('Stock_Management')
    //   }
    //   else{
    //     return Alert.alert(res.error)
    //   }
    //   console.log(res)
    //   await utility.setInLocalStorge('token', res.data.token)
     

    // }
  }

  //  state = {
  //   spinner: false
  // };


  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  return (
    <View style={{ height: '100%', width: '100%', }}>

      <Mainheader props='Login' />
      {/* {condition == true ?
<View style={{justifyContent: "center"}}>
<ActivityIndicator size="large" color="#0000ff" />
</View>:null} */}
      <Spinner
        //visibility of Overlay Loading Spinner
        visible={loading}
      //Text with the Spinner
      // textContent={'Loading...'}
      //Text style of the Spinner Text
      // textStyle={styles.spinnerTextStyle}
      />

      <View style={{ flexDirection: 'column', marginTop: '10%', marginLeft: '10%', marginRight: '10%' }}>
        <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Email</Text>
        <TextInput style={{ borderBottomWidth: 1 }} onChangeText={(email) => setEmail(email)}></TextInput>
      </View>
      <View style={{ flexDirection: 'column', marginLeft: '10%', marginRight: '10%', marginTop: '5%' }}>
        <Text style={{ fontSize: 20, color: "#00203FFF", fontWeight: 'bold' }}>Password</Text>
        <TextInput style={{ borderBottomWidth: 1 }} onChangeText={(password) => setPassword(password)} secureTextEntry={true}></TextInput>
      </View>
      <TouchableOpacity onPress={() => Login()}>
        <View style={{
          backgroundColor: "#00203FFF", marginLeft: '40%', marginRight: '40%', padding: 15, marginTop: '10%',
          borderRadius: 15
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
