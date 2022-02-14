import { useState } from 'react';

const useReverse = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reverseValue = (name, checkValue) => {
        (typeof initialValue === "boolean") &&
            setValue(!value);
        (typeof initialValue === "object") &&
            setValue({...value, [name]: checkValue})
    }
    return [value, reverseValue];
}

export default useReverse;