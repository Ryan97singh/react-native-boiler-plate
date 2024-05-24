import { NavigatorScreenParams } from '@react-navigation/native';

export type IMainParamList = {
  SplashScreen: undefined;
  AuthNavigation: NavigatorScreenParams<IAuthParamList> | undefined;
//   HomeNavigation: NavigatorScreenParams<IHomeParamList>;
};
export type IAuthParamList = {
  Login: undefined;
};