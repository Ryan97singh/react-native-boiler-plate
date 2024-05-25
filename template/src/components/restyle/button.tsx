import * as React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';
import { Theme, palette } from '@/theme/theme';
import { Box, Text } from '@/components/restyle';

const buttonVariant = createVariant<Theme>({ themeKey: 'buttonVariants' });
const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([buttonVariant as any], Box);

const restyleFunctions = [
  buttonVariant as any,
  spacing,
  border,
  backgroundColor,
] as any;

type Props = SpacingProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label?: string;
    outline?: boolean;
    loading?: boolean;
    disabled?: boolean;
  };

export const Button = ({
  onPress,
  label,
  disabled = false,
  loading = false,
  variant = 'primary',
  ...rest
}: Props) => {
  //   const props = useRestyle(restyleFunctions, { ...rest, variant });
  //   const textVariant = ('button_' + variant) as Partial<
  //     keyof Omit<Theme['textVariants'], 'defaults'>
  //   >;

  //   console.log('TextVariant', textVariant);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} disabled={disabled}>
      <ButtonContainer
        backgroundColor="btnText"
        borderRadius="s"
        marginVertical="s"
        alignItems="center"
        justifyContent="center"
        // {...props}
      >
        {loading ? (
          <ActivityIndicator color={palette.btnText} />
        ) : (
          <Text
            textAlign="center"
            variant={disabled ? 'button_disabled' : 'button_primary'}>
            {label}
          </Text>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};
