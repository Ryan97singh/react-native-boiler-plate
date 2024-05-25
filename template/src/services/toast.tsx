import Toast, { ToastPosition } from 'react-native-toast-message';

export const showToast = (
  message: string,
  type: 'success' | 'info' | 'error' = 'success',
  subtitle: string = '',
  position: ToastPosition = 'bottom',
) => {
  Toast.show({
    text1: message,
    ...(subtitle ? { text2: subtitle } : {}),
    type: message?.includes('Something Went Wrong!') ? 'error' : type,
    visibilityTime: 3000,
    position: position,
  });
};
