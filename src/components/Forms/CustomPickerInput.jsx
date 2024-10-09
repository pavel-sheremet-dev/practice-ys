import { forwardRef } from "react";
import Button from "../Button/Button";

const CustomPickerInput = forwardRef(({ value, onClick, className }, ref) => (
  <Button type="button" className={className} onClick={onClick} ref={ref}>
    {value}
  </Button>
));

CustomPickerInput.displayName = "CustomPickerInput";

export default CustomPickerInput;
