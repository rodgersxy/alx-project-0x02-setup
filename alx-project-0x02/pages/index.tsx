import React from 'react';
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  return (
      <div>
          <Header />
          <main>
              <p>Welcome to the ALX Project with Next.js, TypeScript, and Tailwind CSS!</p>
          </main>
      </div>
  );
};

export default Home;