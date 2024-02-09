import { useCallback, useState } from 'react';

const Toggeler = ({renderA, renderB}) => {

    const [isVisibleA, setVisibleA] = useState(true);

    const handleToggle = useCallback(() => {
        setVisibleA(v => !v);
    }, []);

    return (
        <div>
            <span onClick={handleToggle}>🏀 </span>
            {isVisibleA ? renderA() : renderB()}
        </div>
    )
}

Toggeler.defaultProps = {
    renderA: () => <></>,
    renderB: () => <></>
}

export default Toggeler;