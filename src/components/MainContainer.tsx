import React, { useState } from 'react';
import Form from './Form';
import Welcome from './Welcome';
import Form2 from './Form2';

export default function MainContainer() {

  const [page, setPage] = useState(0)

  return (
    <div className="hero-bg relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <Welcome setPage={setPage} />
    </div>
  );
}
