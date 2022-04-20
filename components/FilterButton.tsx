import { Dispatch, ReactChild, useEffect, useState } from 'react';

interface IButton {
    className: string;
    children: ReactChild;
    dataset: string;
    activeFilter: string;
    setActiveFilter: Dispatch<React.SetStateAction<string>>;
}

const Button = ({
    className,
    children,
    dataset,
    activeFilter,
    setActiveFilter,
}: IButton) => {
    const [cName, setcName] = useState('');
    useEffect(() => {
        if (activeFilter === dataset) {
            setcName(' active');
        } else {
            setcName('');
        }
    }, [activeFilter]);

    return (
        <button
            onClick={() => setActiveFilter((activeFilter = dataset))}
            type="button"
            className={className + ' btn' + cName}
            data-type={dataset}
        >
            {children}
        </button>
    );
};

export default Button;
