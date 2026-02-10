import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RootScreen from '../screens/RootScreen';
import ResetPW from '../screens/ResetPWScreen';
import VerifyScreen from '../screens/VerifyScreen';
import NewPWScreen from '../screens/NewPWScreen';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  RootScreen  : undefined;
  ResetPW: undefined;
  Verify: { email?: string } | undefined;
  NewPW: { email?: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        initialRouteName='RootScreen'
        screenOptions={{
          headerShown: false // Fixed: Use boolean, not string
        }}
      >
        <Stack.Screen name="RootScreen" component={RootScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ResetPW" component={ResetPW} />
        <Stack.Screen name="Verify" component={VerifyScreen} />
        <Stack.Screen name="NewPW" component={NewPWScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
