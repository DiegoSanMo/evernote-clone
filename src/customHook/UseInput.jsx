import { useState } from 'react';

const UseInput = (initiaValue = '') => {
  const [value, setValue] = useState(initiaValue);
  const reset = () => {
    setValue(initiaValue)
  }
  const bind = { 
    value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}

export default UseInput;