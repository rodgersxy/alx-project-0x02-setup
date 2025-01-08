import React from 'react';
import Button from '../components/common/Button';

const About: React.FC = () => {
    return (
        <div style={{ padding: '16px', textAlign: 'center' }}>
            <h1>About Us</h1>
            <p>This page demonstrates the reusable Button component.</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
                <Button size="small" shape="rounded-sm">
                    Small Button
                </Button>
                <Button size="medium" shape="rounded-md">
                    Medium Button
                </Button>
                <Button size="large" shape="rounded-full">
                    Large Button
                </Button>
            </div>
        </div>
    );
};

export default About;
