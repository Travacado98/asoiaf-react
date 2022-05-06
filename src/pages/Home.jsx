import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'ASOIAF | Home';
  }, []);

  return (
    <>
      <div>Hi threre</div>
      <div>Hi threre2</div>
    </>
  );
}
