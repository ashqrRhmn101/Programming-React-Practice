import { useState } from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleFieldChange = (e) => {
    setFieldValue(e.target.value);
  };

  return [fieldValue, handleFieldChange];
};

export default useInputField;
