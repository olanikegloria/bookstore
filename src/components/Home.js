import React from 'react';
import ShowBooks from './ShowBooks';
import AddBook from './AddBook';

function Home() {
  return (
    <>
      <div className="home">
        <ShowBooks />
        <AddBook />
      </div>
    </>
  );
}

export default Home;
