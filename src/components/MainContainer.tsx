import React, { useState } from 'react';
import Welcome from './Welcome';

export default function MainContainer() {

  const [page, setPage] = useState(0)

  return (
    <div className="hero-bg relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <Welcome setPage={setPage} page={page}/>
    </div>
  );
}
