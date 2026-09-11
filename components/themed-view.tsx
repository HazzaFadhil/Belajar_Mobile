import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};
// "ThemedView boleh menerima berbagai informasi yang dimiliki sebuah View, 
// ditambah informasi lightColor dan darkColor."

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor }, 
    'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
