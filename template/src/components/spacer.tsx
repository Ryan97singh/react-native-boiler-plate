import { ISpacerProps } from '@/types';
import React, { FC } from 'react';
import { View } from 'react-native';

export const Spacer: FC<ISpacerProps> = ({ size, horizontal = false }) => {
  const horizontalStyle = {
    width: size,
  };
  const verticalStyle = {
    height: size,
  };
  return <View style={horizontal ? horizontalStyle : verticalStyle} />;
};
