import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

 export default function BasicDateTimePicker() {
  const [clearedDate, handleClearedDateChange] = useState(null);
  //const [selectedDate, handleDateChange] = useState(new Date());

  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {/*<DateTimePicker clearable label="Next Appointment" inputVariant="outlined" value={selectedDate} disablePast onChange={handleDateChange} />*/}
        <DateTimePicker
          clearable
          label="Set an Appointment" 
          inputVariant="outlined"
          value={clearedDate}
          disablePast
          onChange={handleClearedDateChange}
        />
      </MuiPickersUtilsProvider>
  );
}


