import React from 'react';
import { View, Pressable } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

const RangeSelector = ({ length, value = 3, onValueChange, height=8 }) => {
  const colors = useThemeColor();

  return (
    <View style={{ backgroundColor: colors.text + "88", height: height, width: 200, flexDirection: 'row', borderRadius:height/2}}>
      {[...Array(length)].map((_, index) => (
        <Pressable
          key={index + 1}
          onPress={() => onValueChange(index)}
          style={{
            backgroundColor: index <= value ? colors.text : 'transparent',
            flex: 1,
            height: height,
            borderBottomRightRadius:index===value || index===length-1 ?height/2:0,
            borderTopRightRadius:index===value || index===length-1 ?height/2:0,
            borderBottomLeftRadius:index===0?height/2:0,
            borderTopLeftRadius:index===0?height/2:0
          }}
        />
      ))}
    </View>
  );
};

export default RangeSelector;
