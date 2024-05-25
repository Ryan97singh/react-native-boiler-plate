import { IAuthParamList, IMainParamList } from '@/navigation/types';
import { Login } from '@/pages/auth';
import SplashScreen from '@/pages/startup/splash-screen';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const MainStack = createStackNavigator<IMainParamList>();
const AuthStack = createStackNavigator<IAuthParamList>();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationTypeForReplace: 'push',
      }}>
      <MainStack.Screen name="SplashScreen" component={SplashScreen} />
      <MainStack.Screen name="AuthNavigation" component={AuthNavigator} />
      {/* <MainStack.Screen name="HomeNavigation" component={HomeTabNavigator} /> */}
    </MainStack.Navigator>
  );
};

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationTypeForReplace: 'push',
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      {/* <MainStack.Screen name="HomeNavigation" component={HomeTabNavigator} /> */}
    </AuthStack.Navigator>
  );
};
