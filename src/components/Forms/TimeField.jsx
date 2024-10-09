import { getDate, setDate, setHours, setMinutes, setSeconds } from "date-fns";
import CustomPickerInput from "./CustomPickerInput";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import { useEffect, useRef } from "react";

const TimeField = ({ min, max, ...props }) => {
  const [field, , { setValue }] = useField(props);
  const isFirstRender = useRef(true);

  const { getFieldMeta } = useFormikContext();

  const { value: date } = getFieldMeta("date");

  const day = getDate(date);

  const value = setDate(field.value, getDate(date));

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day]);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={value}
      onChange={(date) => setValue(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="HH:mm"
      timeFormat="HH:mm"
      minTime={min ?? setHours(setMinutes(setSeconds(new Date(), 0), 0), 7)}
      maxTime={max ?? setHours(setMinutes(setSeconds(new Date(), 0), 0), 21)}
      customInput={<CustomPickerInput />}
    />
  );
};

export default TimeField;
