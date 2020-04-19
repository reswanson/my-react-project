import React, { useState } from 'react';

import bookdata from '../data/booklist2.json';


const BooklistContext = React.createContext([{}, () => {}]);


const BooklistProvider = (props) => {
  const [state, setState] = useState(bookdata);	
  return (
	<div>
    <BooklistContext.Provider value={[state, setState]}>
      {props.children}
    </BooklistContext.Provider>
    </div>
  );
}


export { BooklistContext, BooklistProvider };
