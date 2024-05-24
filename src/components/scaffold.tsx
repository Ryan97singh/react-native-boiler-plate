import { KeyboardAvoider } from '@/components/keyboard-avoider';
import { IScaffoldProps } from '@/types';
import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

/**
 * A scaffold component that is provides scrollable view.
 *
 * @prop [wrapperStyle] - Style object applied to the outermost component.
 * @prop [scrollContainerStyle] - Style object applied to the scrollview component.
 * @prop [children] - A single component (not zero, or more than one.)
 */

export const Scaffold: FC<IScaffoldProps> = props => {
  const { wrapperStyle, children, scrollContainerStyle, onScroll } = props;
  return (
    <KeyboardAvoider style={[styles.formContent, wrapperStyle]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.scrollView, scrollContainerStyle]}
        onScroll={onScroll}
        scrollEventThrottle={16}>
        {children}
      </ScrollView>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  formContent: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
