import { PropsWithChildren } from 'react';
import {
  KeyboardAvoidingViewProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type IKeyboardAvoidingViewProps = {
  withHeader?: boolean;
} & KeyboardAvoidingViewProps;

export type IScaffoldProps = PropsWithChildren<{
  wrapperStyle?: StyleProp<ViewStyle>;
  scrollContainerStyle?: StyleProp<ViewStyle>;
  onScroll?:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | undefined;
}>;
export type ISvgIconProps = {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  size?: string | number;
  strokeColor?: string;
} & React.SVGAttributes<SVGElement>;

export type ISpacerProps = {
  size: number;
  horizontal?: boolean;
};

export type IUser = {};
