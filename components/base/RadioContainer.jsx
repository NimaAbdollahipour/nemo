import React, { useState } from 'react';
import { View } from 'react-native';

const RadioContainer = ({ children, onChange, current, style }) => {
  const handlePress = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View style={style}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          selected: current,
          onPress: handlePress,
        })
      )}
    </View>
  );
};

export default RadioContainer;
