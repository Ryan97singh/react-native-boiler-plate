import { StyleSheet } from 'react-native';

//logo
import ic_no_internet from '@/assets/icons/ic_no_internet.svg';
import ic_logo from '@/assets/icons/ic_logo.svg';

export const icons = {
  ic_no_internet,
  ic_logo,
};

export const imageStyles = StyleSheet.create({
  logo20: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  logo28: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
  imageContain: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageCover: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});