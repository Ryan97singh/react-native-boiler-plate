// import { api } from '@/api';
// import { icons, images } from '@/assets';
// import { ImageIcon, Loader, Spacer, SvgIcon } from '@/components';
import { icons } from '@/assets';
import { Box, Text } from '@/components/restyle';
import { SvgIcon } from '@/components/svg-icon';
// import useAuth from '@/hooks/useAuth';
import { IMainParamList } from '@/navigation/types';
// import { useAppDispatch } from '@/store/hooks';
// import { setStatusBar } from '@/store/reducers/status-bar.reducer';
import { FontFamilyRoboto, palette } from '@/theme/theme';
import { wp } from '@/utils/responsive';
import { useFocusEffect } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FC, useCallback, useEffect } from 'react';

type Props = StackScreenProps<IMainParamList, 'SplashScreen'>;

const SplashScreen: FC<Props> = ({ navigation }) => {

//   const { profile } = useAuth();

//   const dispatch = useAppDispatch();

//   const checkSession = useCallback(async () => {
//     try {
//       if (profile) {
//         await api.get(CHECK_SESSION);

//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'HomeNavigation' }],
//         });
//       } else {
//         setTimeout(() => {
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'AuthNavigation' }],
//           });
//         }, 0);
//       }
//     } catch (error) {
//       console.log('Invalid Session');
//       console.error(error);
//       setTimeout(() => {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'AuthNavigation' }],
//         });
//       }, 0);
//     }
//   }, [navigation, profile]);

//   useEffect(() => {
//     checkSession();
//   }, [checkSession]);

//   useFocusEffect(
//     useCallback(() => {
//       dispatch(
//         setStatusBar({
//           backgroundColor: palette.cardBgBlue,
//           animated: true,
//           barStyle: 'light-content',
//         }),
//       );
//     }, [dispatch]),
    //   );
    
    //useEffects
    useEffect(() => { 
        setTimeout(() => {
            navigation.navigate('AuthNavigation')
        }, 2000)
    },[])

  return (
    <Box
      flex={1}
      backgroundColor="pureWhite"
      alignItems="center"
      justifyContent="center">
      <Box>
        <SvgIcon icon={icons.ic_logo} size={wp(60)} />
      </Box>
      <Box flexDirection="row">
      </Box>
    </Box>
  );
};

export default SplashScreen;
