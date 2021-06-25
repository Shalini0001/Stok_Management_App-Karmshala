import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Splash from '../Screens/Splash';
import Terms_of_Services from '../Screens/Terms_of_Services';
import Stock_Management from '../Screens/Stock_Management';
import Dashboard from '../Screens/Dashboard';
import Products from '../Screens/Products';
import Low_Stock from '../Screens/Low_Stock';
import Login from '../Screens/Login';
import All_Transaction from '../Screens/All_Transaction';
import Setting from '../Screens/Setting';
import Pro_Version from '../Screens/Pro_Version';
import Exported_Reports from '../Screens/Exported_Reports';
import Local_Backups from '../Screens/Local_Backups'; 
import Drive_Backups from '../Screens/Drive_Backups'; 
import Backup_Transfer_Guide from '../Screens/Backup_Transfer_Guide'; 

const MainStack =()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Terms_of_Services" component={Terms_of_Services} options={{headerShown:false}}/>
        <Stack.Screen name="Stock_Management" component={Stock_Management} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="Products" component={Products} options={{headerShown:false}}/>
        <Stack.Screen name="Low_Stock" component={Low_Stock} options={{headerShown:false}}/>
        <Stack.Screen name="All_Transaction" component={All_Transaction} options={{headerShown:false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Pro_Version" component={Pro_Version} options={{headerShown:false}}/>
        <Stack.Screen name="Exported_Reports" component={Exported_Reports} options={{headerShown:false}}/>
        <Stack.Screen name="Local_Backups" component={Local_Backups} options={{headerShown:false}}/>
        <Stack.Screen name="Drive_Backups" component={Drive_Backups} options={{headerShown:false}}/>
        <Stack.Screen name="Backup_Transfer_Guide" component={Backup_Transfer_Guide} options={{headerShown:false}}/>
    </Stack.Navigator>
    );
}
export default MainStack;