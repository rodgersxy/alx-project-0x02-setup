import React from 'react';
import Card from '@/components/common/Card';
const Home: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            padding: '16px',
        }}>
            <Card title="Welcome" content="This is the welcome card content." />
            <Card title="Features" content="Learn about the features of this project." />
            <Card title="Contact Us" content="Feel free to reach out for more information." />
        </div>
    );
};

export default Home;
