import DatePicker from "react-datepicker";
import { startOfDay } from "date-fns";
import { useField } from "formik";

import CustomPickerInput from "./CustomPickerInput";

const DateField = ({ ...props }) => {
  const [field, , { setValue }] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      selected={field.value}
      onChange={(date) => setValue(startOfDay(date))}
      customInput={<CustomPickerInput />}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default DateField;
