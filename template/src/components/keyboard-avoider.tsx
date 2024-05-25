import React, { FC } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

import { isAndroid, isIOS } from '@/utils/platform';
import { IKeyboardAvoidingViewProps } from '@/types';

/**
 * Renders RN's `KeyboardAvoidingView` on iOS, `View` on Android.
 */

const keyboardOffset = isIphoneX() ? 12 + getBottomSpace() : 20;

export const KeyboardAvoider: FC<IKeyboardAvoidingViewProps> = props => {
  const {
    withHeader = true,
    children,
    style,
    contentContainerStyle,
    ...restProps
  } = props;

  /**
   * On Android this view has no functionality because it is provided by the OS
   * already. We enabled this by setting android:windowSoftInputMode="adjustResize"
   * in AndroidManifest.xml.
   */
  if (isAndroid) {
    return <View style={style}>{children}</View>;
  }

  //   const keyboardAvoidingProps = withHeader ? avoidWithHeader : defaultAvoid;

  return (
    <KeyboardAvoidingView
      style={style}
      contentContainerStyle={contentContainerStyle}
      behavior={isIOS ? 'padding' : undefined}
      keyboardVerticalOffset={
        isIOS ? (withHeader ? keyboardOffset : 0) : undefined
      }
      {...restProps}>
      {children}
    </KeyboardAvoidingView>
  );
};
