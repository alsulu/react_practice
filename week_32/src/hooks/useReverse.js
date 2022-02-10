import { useState } from 'react';

const useReverse = () => {
    const [value, setValue] = useState(false);
    const reverseValue = () => {
        setValue(!value);
    }
    return [value, reverseValue];
}

export default useReverse;