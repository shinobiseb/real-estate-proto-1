import { useState } from 'react';
import Welcome from './Welcome';
import Form from './Form';
import Form2 from './Form2';

export default function MainContainer() {
  const [page, setPage] = useState(0);

  let content;

  if (page === 0) {
    content = <Welcome setPage={setPage} page={page}/>;
  } else if (page === 1) {
    content = <Form setPage={setPage} page={page}/>;
  } else if (page === 2) {
    content = <Form2 setPage={setPage} page={page}/>;
  } else {
    content = <h3 className='text-white text-3xl'>Page not found</h3>; // Handle unexpected values
  }

  console.log(page)

  return (
    <div className="hero-bg relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {content}
    </div>
  );
}
