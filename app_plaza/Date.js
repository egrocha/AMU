import React, {useState} from 'react';
import {View, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DataC = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // alert(date.getDay())

  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{margin: 10}}>
      <View>
        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', borderRadius:10, margin: 10, backgroundColor:'slategray', padding: 10}} onPress={showDatepicker}>
        <Text style={{color: 'white', fontSize: 16}}>Escolha a data</Text>
        {/* <Button onPress={showDatepicker} title="Escolha a data" /> */}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center', borderRadius:10, margin: 10, backgroundColor:'slategray', padding: 10}} onPress={showTimepicker}>
        <Text style={{color: 'white', fontSize: 16}}>Escolha a hora</Text>
        {/* <Button onPress={showTimepicker} title="Escolha a hora" /> */}
        </TouchableOpacity>

      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}  
      
      <Text style={{fontSize: 15, paddingLeft: 10}}>Data: {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes()}</Text>
    </View>
  );
};

export default DataC;