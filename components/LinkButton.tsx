import React, { ReactChild } from 'react';

interface IButton {
    link: string;
    className: string;
    children: ReactChild;
}

const LinkButton = ({ link, className, children }: IButton) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={className + 'btn'}
        >
            {children}
        </a>
    );
};

export default LinkButton;
