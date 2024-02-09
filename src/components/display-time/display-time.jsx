import { useEffect } from 'react';
import { useState } from 'react';

const DisplayTime = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timerId = setTimeout(() => setNow(new Date()), 200);

        return () => {
            clearTimeout(timerId);
        };
    });

    const hours = now.getHours().toLocaleString('fr-be', { minimumIntegerDigits: 2 });
    const minutes = now.getMinutes().toLocaleString('fr-be', { minimumIntegerDigits: 2 });
    const secondes = now.getSeconds();

    return (
        <span>{hours} : {minutes} : {secondes<10 && '0'}{secondes}</span>
    );
};

export default DisplayTime;