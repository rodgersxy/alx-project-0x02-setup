import React from "react";
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600 transition duration-200`}
        >
            {children}
        </button>
    );
};

export default Button;