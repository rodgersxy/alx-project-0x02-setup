import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '8px',
            maxWidth: '300px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;