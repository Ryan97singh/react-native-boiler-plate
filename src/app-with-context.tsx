import { icons } from '@/assets';
import { Spacer, SvgIcon } from '@/components';
import { Box, Text } from '@/components/restyle';
import { Button } from '@/components/restyle/button';
import { navigationRef } from '@/hooks/navigation';
import { Startup } from '@/pages/startup/startup';
import BottomSheet from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
const AppWithContext = () => {
  return (
    <>
        <NavigationContainer ref={navigationRef}>
          <Startup />
          <Toast bottomOffset={100} position="bottom" />
          {/* <StatusBar {...statusBarProps} /> */}
        </NavigationContainer>
        {/* <BottomSheet
          ref={noInternetRef}
          index={-1}
          snapPoints={noInternetSnapPoints}
          backgroundStyle={styles.bottomSheet}
          backdropComponent={Backdrop}>
          <Box flex={1} px="l" py="m" alignItems="center" gap="s">
            <SvgIcon icon={icons.ic_no_internet} size={50} />
            <Text variant="header">Whoops!</Text>
            <Text variant="headerText">No Internet Connection found.</Text>
            <Text variant="headerText">
              Check your connection or try again!
            </Text>
            <Spacer size={30} />
            <Button
              label="Try Again"
              boxProps={{
                width: wp(50),
              }}
              onPress={() => {
                checkInternetConnection();
              }}
            />
          </Box>
        </BottomSheet> */}
      </>
  );
};

export default AppWithContext;