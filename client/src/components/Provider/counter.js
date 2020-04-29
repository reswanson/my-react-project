
const mybookstore = (state = 0, action) => {
  switch(action.type) {
     // I left this as LOG_IN and LOG_OUT as that is the direction I am going
     case 'LOG_IN':
       return state = state + 1;
       // return { ...state, auth: {loggedIn: true}};
     case 'LOG_OUT':
       // Dont let state go below zero
		if(state <= 0)  {
		  return state = 0;
	    } else {
	      return state = state -1;
		}
       // return { ...state, auth: {loggedIn: true}};
     default:
       return state;
   }
};

export default mybookstore;
 