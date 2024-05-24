import { Box } from '@/components/restyle/box';
import { Theme } from '@/theme/theme';
import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle';
import { PropsWithChildren } from 'react';

type ICardProps = SpacingProps<Theme> &
  VariantProps<Theme, 'cardVariants'> &
  React.ComponentProps<typeof Box>;
export const Card = createRestyleComponent<ICardProps, Theme>([
  spacing,
  createVariant({ themeKey: 'cardVariants' }),
]);
