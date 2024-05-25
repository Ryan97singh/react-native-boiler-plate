import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const useCustomNavigation = <T extends ParamListBase>() =>
  useNavigation<NavigationProp<T>>();

export const navigationRef = createNavigationContainerRef<any>();

export const navigate = (name: string, params?: Record<string, any>) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const navigateWithReset = (
  name: string,
  params?: Record<string, any>,
) => {
  if (navigationRef) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: name, ...(params ? { params: params } : {}) }],
    });
  }
};
