import React, { FC } from 'react';

// import { blackColor } from '@/theme/colors';
import { ISvgIconProps } from '@/types';
import { palette } from '@/theme/theme';

/**
 * Renders a svg image.
 *
 * @prop [style] - Style object for additional customization.
 * @prop size - Sets width and height in logical pixels.
 * @prop [width] - Width of the component in pixels.
 * @prop [height] - Height of the component in pixels.
 * @prop [icon] - Name of svg icon.
 */
export const SvgIcon: FC<ISvgIconProps> = ({
  size = '5em',
  color = palette.transparent,
  icon: Icon,
  width,
  height,
  strokeColor = 'transparent',
  ...rest
}) => {
  if (width && height) {
    return (
      <Icon
        fill={color}
        width={width}
        height={height}
        style={{ width: size, height: size }}
        stroke={strokeColor}
        {...rest}
      />
    );
  } else {
    return (
      <Icon
        fill={color}
        stroke={strokeColor}
        style={{ width: size, height: size }}
        {...rest}
      />
    );
  }
};
