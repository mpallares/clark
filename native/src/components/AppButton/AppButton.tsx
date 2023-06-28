import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '../../constants/colors';

interface AppButtonProps {
  title?: string;
  onPress?: () => void;
  color?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  borderRadius?: number;
}
export const AppButton: FC<AppButtonProps> = ({
  title,
  onPress,
  color,
  width,
  height,
  fontSize,
  borderRadius,
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.CLARK_BLUE_PRIMARY,
        width: width,
        height: height,
        borderRadius: borderRadius,
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: color, fontSize: fontSize, textAlign: 'center' }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
