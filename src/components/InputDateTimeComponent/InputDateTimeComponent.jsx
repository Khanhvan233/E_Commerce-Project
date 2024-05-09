import React, { useState , useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputComponent from '../InputComponent/InputComponent';

function InputDateTimeComponent({placeholder,value}) {
  const [selectedDate, setSelectedDate] = useState(null); 

  useEffect(() => {
    if (value) {
      const dateParts = value.split('-'); // Giả sử value có dạng 'yyyy-mm-dd'
      const dateObject = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Chuyển đổi thành Date object
      setSelectedDate(dateObject);
    }
  }, [value]);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd" 
        showYearDropdown 
        scrollableMonthYearDropdown 
        placeholderText={placeholder}
        customInput={<InputComponent/>}
      />
    </div>
  );
}

export default InputDateTimeComponent;
