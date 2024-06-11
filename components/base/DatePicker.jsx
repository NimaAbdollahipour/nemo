import React, { useState } from 'react';
import { Platform, Pressable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ThemedText from './ThemedText';
import { useThemeColor } from '../../hooks/useThemeColor';
import ThemedIcon from './ThemedIcon';
const DatePickerExample = () => {
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
    const colors = useThemeColor()
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setChosenDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <Pressable style={{
        padding:10, 
        borderRadius:10, 
        backgroundColor:colors.elevated,
        height:48,
        display:'flex', 
        justifyContent:'space-between',
        alignItems:'center',
        display: 'flex',
        flexDirection:'row',
        gap:10,
        width:'100%'
    }} onPress={showDatepicker}>
    <ThemedText>{chosenDate.toDateString()}</ThemedText>
    {showDatePicker && (
        <DateTimePicker
          value={chosenDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
      <ThemedIcon name="calendar" small={true}/>
    </Pressable>
  );
};

export default DatePickerExample;
