import React from 'react';
import Form from './Form';
import Welcome from './Welcome';

export default function MainContainer() {
  return (
    <div className="hero-bg relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <Welcome/>
    </div>
  );
}
