import { useState } from 'react';

const useReverse = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reverseValue = () => {
        setValue(!value);
    }
    return [value, reverseValue];
}

export default useReverse;